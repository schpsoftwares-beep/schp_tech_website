import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { useApprovedReviews, useCreateReview } from "@/hooks/use-reviews";
import { format } from "date-fns";
import { Star, Loader2, Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Reviews() {
  const { data: reviews, isLoading } = useApprovedReviews();
  const createReview = useCreateReview();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({ name: "", text: "", rating: 5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) {
      toast({ title: "Error", description: "Name and review text are required.", variant: "destructive" });
      return;
    }
    
    createReview.mutate(formData, {
      onSuccess: () => {
        toast({ title: "Success!", description: "Your review has been submitted." });
        setFormData({ name: "", text: "", rating: 5 });
      }
    });
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Client <span className="text-gradient">Feedback</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See what our partners say about working with SCHP Technologies.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Reviews List */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-white mb-8">Recent Reviews</h2>
              
              {isLoading ? (
                <div className="flex justify-center py-20">
                  <Loader2 className="animate-spin text-primary" size={40} />
                </div>
              ) : reviews && reviews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review, i) => (
                    <FadeIn key={review.id} delay={i * 0.1}>
                      <div className="glass-card rounded-2xl p-6 h-full flex flex-col relative">
                        <Quote className="absolute top-6 right-6 text-white/5" size={40} />
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, idx) => (
                            <Star 
                              key={idx} 
                              size={16} 
                              className={idx < review.rating ? "fill-accent text-accent" : "text-white/20"} 
                            />
                          ))}
                        </div>
                        <p className="text-white/80 leading-relaxed flex-grow mb-6 relative z-10">"{review.text}"</p>
                        <div className="mt-auto">
                          <p className="font-bold text-white">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{format(new Date(review.date), 'MMM d, yyyy')}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center border-dashed">
                  <Star className="mx-auto text-white/20 mb-4" size={48} />
                  <p className="text-muted-foreground">No reviews yet. Be the first to leave one!</p>
                </div>
              )}
            </div>

            {/* Submission Form */}
            <div>
              <FadeIn delay={0.2} className="sticky top-28">
                <div className="glass-card rounded-2xl p-8 border-t-4 border-t-primary">
                  <h2 className="text-2xl font-display font-bold text-white mb-6">Leave a Review</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
                      <Input 
                        value={formData.name} 
                        onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData(p => ({...p, rating: star}))}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star 
                              size={24} 
                              className={star <= formData.rating ? "fill-accent text-accent" : "text-white/20"} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Review</label>
                      <Textarea 
                        value={formData.text}
                        onChange={e => setFormData(p => ({...p, text: e.target.value}))}
                        placeholder="Tell us about your project experience..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="gradient" 
                      className="w-full mt-4"
                      disabled={createReview.isPending}
                    >
                      {createReview.isPending ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      Submit Review
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
