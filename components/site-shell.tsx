'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { classOfferings, instructor, mailto, sessions, type Session } from './site-data';

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const certificateImage = `${publicBasePath}/ZumbaCertification.png`;

type SiteShellProps = { page?: 'home' | 'classes' | 'schedule' | 'credentials' | 'book' };

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Credentials', href: '/credentials' },
];

function BrandMark() { return <span className="brand-mark" aria-hidden="true">BC</span>; }
function Arrow() { return <span aria-hidden="true">↗</span>; }

function SiteHeader({ page }: { page: SiteShellProps['page'] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Bradford Chessin home" onClick={() => setMenuOpen(false)}>
        <BrandMark />
        <span className="brand-copy"><strong>Bradford Chessin</strong><small>Group fitness / NYC + online</small></span>
      </Link>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span>{menuOpen ? 'Close' : 'Menu'}</span><span className="menu-lines" aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="main-navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => <Link key={item.label} className={page === item.label.toLowerCase() ? 'active' : ''} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
        <Link className="nav-cta" href="/book" onClick={() => setMenuOpen(false)}>Book a session <Arrow /></Link>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="footer-brand"><BrandMark /><span>Bradford Chessin</span></div><p>Certified Group Fitness Instructor · F45 HIIT · Online Zumba</p><a href={mailto('Training inquiry from the website')}>Contact Bradford <Arrow /></a></footer>;
}

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children}</div>;
}

function Hero() {
  return <section className="hero" id="about">
    <div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="live-dot" /> Now training · Fall 2026</p><p className="hero-identity"><strong>Bradford Chessin</strong><span>— Certified Group Fitness Instructor</span></p><h1>Build strength.<br /><em>Find your rhythm.</em></h1><p className="hero-lede">Group fitness that meets you where you are and gets you moving with purpose. HIIT is coached in person at F45. Zumba is coached online through Google Meet.</p><div className="hero-actions"><Link className="button button-dark" href="/schedule">See live schedule <Arrow /></Link><Link className="text-link" href="/classes">Explore classes <Arrow /></Link></div><div className="hero-meta"><span><b>01</b> Certified group fitness</span><span><b>02</b> Weekly online Zumba</span><span><b>03</b> F45 in-person HIIT</span></div></div>
    <div className="hero-art" aria-label="Zumba training sessions with Bradford Chessin"><div className="art-topline"><span>BC / 2026</span><span>Move with purpose</span></div><div className="art-word">ZUMBA</div><div className="art-circle art-circle-one" /><div className="art-circle art-circle-two" /><div className="art-sticker"><span>01</span><strong>Bring<br />your<br />energy</strong></div><div className="art-footer"><span>60 min</span><span>All levels welcome</span></div></div>
  </section>;
}

function TrustStrip() { return <div className="trust-strip" aria-label="Training formats"><span>F45 / HIIT</span><i /><span>Google Meet / Zumba</span><i /><span>Private coaching</span><i /><span>All levels welcome</span></div>; }

function ClassCard({ item }: { item: (typeof classOfferings)[number] }) {
  return <article className={`class-card class-card-${item.color}`}><div className="class-card-top"><span>{item.number}</span><span>{item.eyebrow}</span></div><h3>{item.title}</h3><p>{item.description}</p><div className="class-details">{item.details.map((detail) => <span key={detail}>{detail}</span>)}</div><div className="class-card-bottom"><span>{item.availability}</span><Link href={`/book?service=${encodeURIComponent(item.title)}`} aria-label={`Book ${item.title}`}>Book <Arrow /></Link></div></article>;
}

function ClassGrid({ limit }: { limit?: number }) { const items = limit ? classOfferings.slice(0, limit) : classOfferings; return <div className="class-grid">{items.map((item) => <ClassCard key={item.title} item={item} />)}</div>; }

function ClientFit() {
  return <section className="fit-section page-section"><div className="fit-lead"><p className="eyebrow">03 / A clear place to start</p><h2>Come as you are.<br /><em>Train from there.</em></h2><p>New to group fitness or getting back into a routine? Sessions are coached with simple options, clear expectations, and room to work at your own level.</p></div><div className="fit-list"><div><span>01</span><div><strong>All levels welcome</strong><p>Modifications are part of the coaching, not an afterthought.</p></div></div><div><span>02</span><div><strong>Know what to expect</strong><p>Choose the right format: HIIT at F45 or Zumba on Google Meet.</p></div></div><div><span>03</span><div><strong>Build a repeatable rhythm</strong><p>Ask about a recurring weekly spot or a plan shaped around your schedule.</p></div></div></div></section>;
}

function ScheduleRow({ session }: { session: Session }) {
  return <article className="schedule-row"><div className="schedule-date"><span>{session.month}</span><strong>{session.date}</strong></div><div className="schedule-main"><p className="schedule-full-date">{session.fullDate}</p><h3>{session.kind} <span>· {session.time}</span></h3><p className="schedule-location">{session.format} · {session.location}</p></div><div className="schedule-instructor"><span>Instructor</span><strong>{instructor.name}</strong></div><Link className="schedule-action" href={`/book?session=${encodeURIComponent(session.fullDate)}`}>Reserve <Arrow /></Link></article>;
}

function SchedulePreview() {
  return <section className="schedule-section page-section" id="schedule-preview"><div className="schedule-header"><SectionIntro eyebrow="02 / Live schedule" title="Same energy, every week."><p>Come for the music, stay for the consistency. The Thursday Zumba rhythm is live online through Google Meet across the next two months.</p></SectionIntro><Link className="text-link" href="/schedule">View full schedule <Arrow /></Link></div><div className="schedule-list">{sessions.slice(0, 4).map((session) => <ScheduleRow key={session.fullDate} session={session} />)}</div><p className="schedule-note"><span className="live-dot" /> All sessions are coached by {instructor.name}. Times shown in Eastern Time. Zumba sessions are online via Google Meet.</p></section>;
}

function CredentialTeaser() {
  return <section className="credential-teaser page-section" id="credentials-preview"><div className="credential-copy"><p className="eyebrow">03 / Credentials</p><h2>Good energy.<br /><em>Real training.</em></h2><p>AFAA-certified instruction with a practical, welcoming approach to group exercise. Every session is built to help you leave feeling stronger than when you arrived.</p><div className="credential-data"><div><span>Credential</span><strong>Primary Group Exercise Certification</strong></div><div><span>Certificate no.</span><strong>1190370778</strong></div><div><span>Valid through</span><strong>December 1, 2028</strong></div></div><Link className="button button-light" href="/credentials">View certificate <Arrow /></Link></div><div className="credential-image-wrap"><div className="credential-image-label">AFAA / Primary Group Exercise</div><Image className="credential-image" src={certificateImage} alt="AFAA Primary Group Exercise Certification for Bradford Chessin" width={1409} height={1117} /><span className="image-caption">Certificate provided by Bradford Chessin</span></div></section>;
}

function BookingBanner() { return <section className="booking-banner page-section" id="contact"><div><p className="eyebrow">04 / Ready when you are</p><h2>Make your next hour<br /><em>count.</em></h2></div><div className="booking-banner-right"><p>Book online Zumba through Google Meet, ask about in-person HIIT at F45, or build a private training plan. Your confirmation includes the right location or link.</p><Link className="button button-dark" href="/book">Start a booking request <Arrow /></Link><a className="email-line" href={mailto('Training inquiry from the website')}>{instructor.email} <Arrow /></a></div></section>; }

function HomePage() {
  return <><Hero /><TrustStrip /><section className="manifesto page-section"><SectionIntro eyebrow="01 / The approach" title="Fitness that feels like a practice, not a punishment."><p>Every class has a clear purpose, a welcoming pace, and enough room for you to make it your own. We train consistently, celebrate the small wins, and keep the door open for the next person.</p></SectionIntro><div className="manifesto-stats"><div><strong>2</strong><span>ways to train<br />F45 HIIT + online Zumba</span></div><div><strong>1×</strong><span>weekly Zumba<br />Thursday evenings</span></div><div><strong>2028</strong><span>credential<br />valid through</span></div></div></section><section className="classes-section page-section" id="classes-preview"><div className="section-bar"><p className="eyebrow">02 / Classes</p><Link className="text-link" href="/classes">See every service <Arrow /></Link></div><h2>Choose your<br /><em>kind of hard.</em></h2><ClassGrid limit={2} /></section><ClientFit /><SchedulePreview /><CredentialTeaser /><BookingBanner /></>;
}

function PageHero({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) { return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-hero-description">{description}</p></section>; }

function ClassesPage() { return <><PageHero eyebrow="01 / Services" title={<>Training with <em>intention.</em></>} description="Pick the format that fits your week. Every offering is coached by Bradford Chessin, with clear instruction, adaptable intensity, and a welcoming place to start." /><section className="page-section standalone-section"><ClassGrid /></section><BookingBanner /></>; }

function SchedulePage() { return <><PageHero eyebrow="01 / Live schedule" title={<>Show up. <em>Move well.</em></>} description="A public view of upcoming online Zumba sessions with Bradford Chessin. The weekly class meets through Google Meet; in-person HIIT is coached separately at F45 Training." /><section className="page-section standalone-section"><div className="schedule-callout"><div><span className="live-dot" /> Weekly rhythm</div><strong>Thursdays · 6:30–7:30 PM ET</strong><span>Online Zumba via Google Meet</span></div><div className="schedule-list full-schedule">{sessions.map((session) => <ScheduleRow key={session.fullDate} session={session} />)}</div><p className="schedule-note"><span className="live-dot" /> The schedule is designed to make weekly attendance simple. Reserve a session to receive the Google Meet link. HIIT sessions are in person at F45 Training.</p></section><BookingBanner /></>; }

function CredentialsPage() { return <><PageHero eyebrow="01 / Credentials" title={<>Qualified to lead.<br /><em>Ready to coach.</em></>} description="A clear look at the group exercise credential behind Bradford Chessin’s training sessions." /><section className="page-section credential-page-grid"><div className="credential-page-copy"><p className="eyebrow">AFAA certification</p><h2>Primary Group<br /><em>Exercise</em></h2><p>The certificate below was provided by Bradford Chessin and confirms completion of the Athletics and Fitness Association of America’s Primary Group Exercise Certification.</p><div className="credential-data credential-data-dark"><div><span>Instructor</span><strong>{instructor.name}</strong></div><div><span>Certificate no.</span><strong>1190370778</strong></div><div><span>Expiration date</span><strong>12 / 01 / 2028</strong></div></div><a className="text-link" href={mailto('Credential question')}>Ask a credential question <Arrow /></a></div><div className="credential-document"><Image className="credential-image" src={certificateImage} alt="AFAA certificate for Bradford Chessin" width={1409} height={1117} priority /><p>Official credential image · AFAA Primary Group Exercise Certification</p></div></section><BookingBanner /></>; }

function BookingPage() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState('Zumba');
  return <><PageHero eyebrow="01 / Booking" title={<>Find your <em>next session.</em></>} description="Choose a service and send a booking request. Bradford will reply with the right details: F45 for in-person HIIT or Google Meet for online Zumba." /><section className="page-section booking-page-grid"><div className="booking-form-card"><div className="form-card-header"><span>Booking request</span><span>01 / 03</span></div><h2>Let’s get you<br /><em>on the schedule.</em></h2><form action={mailto('New training booking request')} method="post" encType="text/plain" onSubmit={() => setSent(true)}><label htmlFor="service">I’m interested in</label><select id="service" name="service" value={service} onChange={(event) => setService(event.target.value)}>{classOfferings.map((item) => <option key={item.title}>{item.title}</option>)}</select><label htmlFor="format">Preferred format</label><select id="format" name="format" defaultValue="Online via Google Meet (Zumba)"><option>Online via Google Meet (Zumba)</option><option>In person at F45 (HIIT)</option><option>In person by appointment</option><option>Either works</option></select><label htmlFor="message">A little about your goals</label><textarea id="message" name="message" rows={4} placeholder="What would you like to work on?" /><button className="button button-dark button-full" type="submit">Email my request <Arrow /></button></form>{sent && <p className="form-success" role="status">Your email app should open with a draft request. If it doesn’t, email {instructor.email} directly.</p>}</div><div className="booking-side"><div className="booking-side-block"><p className="eyebrow">How it works</p><ol className="booking-steps"><li><strong>Pick a service</strong><span>Choose Zumba, HIIT, or a more personal format.</span></li><li><strong>Send a request</strong><span>Tell Bradford your preferred format and goals.</span></li><li><strong>Get the right details</strong><span>F45 for in-person HIIT or Google Meet for online Zumba.</span></li></ol></div><div className="booking-side-block booking-side-note"><span className="note-mark">✦</span><p>Want a recurring weekly spot? Mention it in your request and Bradford will help you find a rhythm.</p></div><div className="booking-side-block business-details"><p className="eyebrow">Business details</p><strong>Bradford Chessin</strong><span>Independent fitness coaching</span><span>HIIT at F45 · Zumba via Google Meet</span></div><a className="email-line" href={mailto('Training inquiry from the website')}>Prefer email? {instructor.email} <Arrow /></a></div></section></>;
}

export default function SiteShell({ page = 'home' }: SiteShellProps) { return <div className="site"><SiteHeader page={page} /><main>{page === 'home' && <HomePage />}{page === 'classes' && <ClassesPage />}{page === 'schedule' && <SchedulePage />}{page === 'credentials' && <CredentialsPage />}{page === 'book' && <BookingPage />}</main><Footer /></div>; }
