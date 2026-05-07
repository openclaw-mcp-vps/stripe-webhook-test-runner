export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Test Stripe Webhooks Locally<br />
          <span className="text-[#58a6ff]">Without ngrok</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Simulate any Stripe webhook event with authentic signatures and realistic payloads — sent directly to your local dev server in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No tunnels. No setup. Just fire events.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⚡', title: 'Instant Events', desc: 'Send checkout.session.completed, invoice.paid, and 30+ events instantly.' },
          { icon: '🔐', title: 'Real Signatures', desc: 'HMAC-SHA256 signed with your webhook secret — passes stripe.webhooks.constructEvent.' },
          { icon: '🎯', title: 'Realistic Payloads', desc: 'Auto-generated payloads with correct structure, IDs, and timestamps.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited webhook events',
              '30+ Stripe event types',
              'Custom payload editor',
              'Retry & delay simulation',
              'Event history log'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Testing Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Do I need to expose my local server to the internet?',
              a: 'No. The tool runs entirely in your browser and sends requests directly to localhost or any local address you specify — no tunnels required.'
            },
            {
              q: 'Will the webhook signatures pass Stripe\'s verification?',
              a: 'Yes. Events are signed with HMAC-SHA256 using your webhook secret, so stripe.webhooks.constructEvent validates them correctly.'
            },
            {
              q: 'Which Stripe events are supported?',
              a: 'Over 30 events including checkout.session.completed, customer.subscription.*, invoice.*, payment_intent.*, and charge.* events.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Stripe Webhook Test Runner. Built for developers.
      </footer>
    </main>
  )
}
