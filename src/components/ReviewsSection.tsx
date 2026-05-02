import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, Send, Loader2, MessageSquarePlus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

interface Review {
  id: string;
  name: string;
  company: string | null;
  country: string | null;
  rating: number;
  review: string;
  created_at: string;
}

const reviewSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(150).optional(),
  country: z.string().trim().max(100).optional(),
  rating: z.number().int().min(1).max(5),
  review: z.string().trim().min(5, "Review must be at least 5 characters").max(1000),
});

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("approved", true)
        .order("created_at", { ascending: false })
        .limit(12);
      if (data) setReviews(data as Review[]);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const parsed = reviewSchema.safeParse({
      name: (fd.get("name") as string) || "",
      company: (fd.get("company") as string) || undefined,
      country: (fd.get("country") as string) || undefined,
      rating,
      review: (fd.get("review") as string) || "",
    });

    if (!parsed.success) {
      toast({
        title: "Invalid input",
        description: parsed.error.issues[0]?.message || "Please check the form.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("reviews").insert(parsed.data);
      if (error) throw error;
      toast({
        title: "Thank you!",
        description: "Your review has been submitted and will appear once approved.",
      });
      form.reset();
      setRating(5);
      setShowForm(false);
    } catch (err) {
      console.error(err);
      toast({
        title: "Could not submit",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" ref={ref} className="py-24 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Customer Reviews
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Honest feedback from clients who partner with Rout Enterprises.
          </p>
          <button
            onClick={() => setShowForm((s) => !s)}
            className="inline-flex items-center gap-2 bg-ember hover:bg-ember-glow text-primary-foreground px-6 py-3 rounded-md font-display font-semibold transition-all hover:scale-[1.02]"
          >
            <MessageSquarePlus className="w-4 h-4" />
            {showForm ? "Close form" : "Write a Review"}
          </button>
        </motion.div>

        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-lg p-8 shadow-card max-w-2xl mx-auto mb-12 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                <input
                  required
                  name="name"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <input
                  name="company"
                  maxLength={150}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50"
                  placeholder="Company (optional)"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Country</label>
              <input
                name="country"
                maxLength={100}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50"
                placeholder="Country (optional)"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Rating *</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    className="p-1"
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                  >
                    <Star
                      className={`w-7 h-7 transition-colors ${
                        n <= (hover || rating)
                          ? "fill-ember text-ember"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Your Review *</label>
              <textarea
                required
                name="review"
                rows={4}
                minLength={5}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50 resize-none"
                placeholder="Share your experience with Rout Enterprises..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-ember hover:bg-ember-glow text-primary-foreground py-3 rounded-md font-display font-semibold transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
              ) : (
                <><Send className="w-4 h-4" /> Submit Review</>
              )}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Reviews are moderated before being published.
            </p>
          </motion.form>
        )}

        {reviews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-ember text-ember" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{r.review}"
                </p>
                <div className="border-t border-border pt-3">
                  <p className="font-display font-semibold text-foreground text-sm">{r.name}</p>
                  {(r.company || r.country) && (
                    <p className="text-xs text-muted-foreground">
                      {[r.company, r.country].filter(Boolean).join(", ")}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
