import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding pt-32 md:pt-40 min-h-[60vh] flex items-center">
      <div className="container-site text-center">
        <h1 className="font-heading text-display text-off-black mb-4">Lost?</h1>
        <p className="text-body text-stone max-w-md mx-auto mb-8">
          This page doesn&apos;t exist. But we do — let&apos;s get you back on
          track.
        </p>
        <Button href="/" size="lg">
          Go home →
        </Button>
      </div>
    </section>
  );
}
