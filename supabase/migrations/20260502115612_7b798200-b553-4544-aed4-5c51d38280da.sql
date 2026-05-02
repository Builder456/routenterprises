CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  country TEXT,
  rating INTEGER NOT NULL DEFAULT 5,
  review TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.validate_review()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.rating < 1 OR NEW.rating > 5 THEN
    RAISE EXCEPTION 'Rating must be between 1 and 5';
  END IF;
  IF length(NEW.name) < 1 OR length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'Name must be 1-100 characters';
  END IF;
  IF length(NEW.review) < 5 OR length(NEW.review) > 1000 THEN
    RAISE EXCEPTION 'Review must be 5-1000 characters';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER validate_review_trigger
BEFORE INSERT OR UPDATE ON public.reviews
FOR EACH ROW EXECUTE FUNCTION public.validate_review();

CREATE POLICY "Anyone can submit reviews"
ON public.reviews FOR INSERT
WITH CHECK (true);

CREATE POLICY "Approved reviews are publicly viewable"
ON public.reviews FOR SELECT
USING (approved = true);