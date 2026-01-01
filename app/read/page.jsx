"use client";

const ReadMorePage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Read More
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
          Donut is a simple and meaningful way to support creators, writers,
          developers, artists, and anyone who shares their work with the world.
        </p>

        {/* Section */}
        <section className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            In today’s internet, creators give their time, energy, and creativity
            freely. They write threads, record podcasts, design interfaces, teach
            skills, and inspire people every single day. Yet, most appreciation
            is limited to likes, shares, or comments.
          </p>

          <p>
            Donut exists to bridge that gap — to turn appreciation into real,
            tangible support. Instead of complicated subscriptions or hidden
            fees, Donut lets supporters send small, meaningful contributions,
            represented as donuts 🍩.
          </p>

          <p>
            One donut might seem small, but together they create something
            powerful: encouragement, sustainability, and motivation to keep
            creating.
          </p>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* What is Donut */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What is Donut?</h2>
          <p className="text-gray-300 leading-relaxed">
            Donut is not just a donation platform. It’s a support system. Every
            donut sent comes with a name and a message, making support feel
            personal, human, and real.
          </p>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Why Donut */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Why Donut Exists</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Simplicity — no unnecessary steps or confusion</li>
            <li>Transparency — support goes directly to creators</li>
            <li>Connection — every donut includes a message</li>
            <li>Freedom — no subscriptions or pressure</li>
          </ul>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* How it Works */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Search for a creator by their username</li>
            <li>Visit their page and learn about their work</li>
            <li>Send donuts with a short message</li>
            <li>The creator receives your support directly</li>
          </ol>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Closing */}
        <section className="space-y-6 text-center">
          <h2 className="text-2xl font-semibold">More Than Money</h2>
          <p className="text-gray-300 leading-relaxed">
            Donut isn’t about money — it’s about recognition. A short message,
            a small contribution, and a moment of encouragement can change
            someone’s day.
          </p>

          <p className="text-gray-400 italic">
            🍩 One donut at a time, we’re building a kinder internet.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ReadMorePage;
