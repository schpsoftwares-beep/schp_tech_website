import { useState } from "react";
import { Link } from "wouter";
import { useReviews, useDeleteReview, useUpdateReview } from "@/hooks/use-reviews";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Lock, LogOut, CheckCircle, XCircle, Trash2, Edit, Save, Code2 } from "lucide-react";
import { Review } from "@/types";

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <Link href="/" className="flex items-center gap-2 mb-10 opacity-50 hover:opacity-100 transition-opacity">
          <Code2 size={24} className="text-primary" />
          <span className="font-display font-bold text-xl text-white">Back to site</span>
        </Link>
        <div className="glass-card p-8 rounded-3xl w-full max-w-md border-primary/20">
          <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-display font-bold text-center text-white mb-8">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            {error && <p className="text-destructive text-sm text-center">{error}</p>}
            <Button type="submit" variant="gradient" className="w-full">Login</Button>
          </form>
        </div>
      </div>
    );
  }

  return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const { data: reviews, isLoading } = useReviews();
  const deleteReview = useDeleteReview();
  const updateReview = useUpdateReview();
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const startEdit = (review: Review) => {
    setEditingId(review.id);
    setEditText(review.text);
  };

  const saveEdit = (id: string) => {
    updateReview.mutate({ id, text: editText }, {
      onSuccess: () => setEditingId(null)
    });
  };

  const toggleApprove = (review: Review) => {
    updateReview.mutate({ id: review.id, approved: !review.approved });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 size={24} className="text-primary" />
            <span className="font-display font-bold text-xl text-white">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-white">View Site</Link>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut size={16} className="mr-2" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">Manage Reviews</h2>
        
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <div className="bg-card rounded-xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-medium">Author & Date</th>
                    <th className="px-6 py-4 font-medium">Rating</th>
                    <th className="px-6 py-4 font-medium w-1/2">Review Text</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {reviews?.map((review) => (
                    <tr key={review.id} className="hover:bg-white/[0.02]">
                      <td className="px-6 py-4 align-top">
                        <div className="font-medium text-white">{review.name}</div>
                        <div className="text-muted-foreground text-xs mt-1">{format(new Date(review.date), 'MMM d, yyyy')}</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="flex text-accent">{"★".repeat(review.rating)}</div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        {editingId === review.id ? (
                          <div className="space-y-2">
                            <Textarea 
                              value={editText} 
                              onChange={(e) => setEditText(e.target.value)}
                              className="min-h-[100px] text-sm"
                            />
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => saveEdit(review.id)} className="h-8">
                                <Save size={14} className="mr-1" /> Save
                              </Button>
                              <Button size="sm" variant="ghost" onClick={() => setEditingId(null)} className="h-8">Cancel</Button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-white/80">{review.text}</p>
                        )}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          review.approved ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {review.approved ? 'Public' : 'Hidden'}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-top text-right space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          title={review.approved ? "Hide Review" : "Approve Review"}
                          onClick={() => toggleApprove(review)}
                        >
                          {review.approved ? <XCircle size={16} className="text-yellow-500" /> : <CheckCircle size={16} className="text-green-500" />}
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-blue-400"
                          title="Edit Text"
                          onClick={() => startEdit(review)}
                          disabled={editingId === review.id}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-destructive"
                          title="Delete"
                          onClick={() => {
                            if(confirm("Are you sure you want to delete this review?")) {
                              deleteReview.mutate(review.id);
                            }
                          }}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {reviews?.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                        No reviews found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
