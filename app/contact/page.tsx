'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import Footer from '@/components/sections/Footer';

const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="rounded-2xl border border-amber-200/60 bg-amber-50/50 p-12">
            <h1 className="font-display text-3xl font-medium text-[rgb(var(--charcoal))] md:text-4xl">
              Request received
            </h1>
            <p className="mt-4 text-[rgb(80,80,80)]">
              Thanks for reaching out. We’ll confirm your meeting time and get back to you shortly.
            </p>
            <Button asChild className="mt-8">
              <Link href="/">Return home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-display mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-800/80">Get in touch</p>
          <h1 className="font-display text-4xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-5xl">
            Book a meeting
          </h1>
          <p className="mt-4 text-lg text-[rgb(80,80,80)]">
            Share your details and pick a time. We’ll confirm and reach out before the call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <Label htmlFor="name" className="text-[rgb(var(--charcoal))]">
              Name *
            </Label>
            <Input
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              className="h-12 rounded-xl border-[rgb(230,228,225)] bg-white focus-visible:ring-amber-500"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="email" className="text-[rgb(var(--charcoal))]">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              className="h-12 rounded-xl border-[rgb(230,228,225)] bg-white focus-visible:ring-amber-500"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="phone" className="text-[rgb(var(--charcoal))]">
              Phone *
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
              className="h-12 rounded-xl border-[rgb(230,228,225)] bg-white focus-visible:ring-amber-500"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-[rgb(var(--charcoal))]">Meeting date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'h-12 w-full justify-start rounded-xl border-[rgb(230,228,225)] bg-white text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-4">
            <Label className="text-[rgb(var(--charcoal))]">Meeting time *</Label>
            <Select required value={time} onValueChange={setTime}>
              <SelectTrigger className="h-12 rounded-xl border-[rgb(230,228,225)] bg-white">
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {TIME_SLOTS.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label htmlFor="message" className="text-[rgb(var(--charcoal))]">
              Project details (optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your pool project, timeline, or questions..."
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              rows={4}
              className="rounded-xl border-[rgb(230,228,225)] bg-white focus-visible:ring-amber-500"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={!date || !time}
            className="w-full rounded-xl bg-amber-600 py-6 text-base font-semibold text-white hover:bg-amber-500 disabled:opacity-50"
          >
            Request meeting
          </Button>
        </form>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
