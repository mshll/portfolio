'use client';

import { motion } from 'framer-motion';
import Container from './Container';
import Section from './Section';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import Link from 'next/link';
import { links } from '@/constants/links';
import { toast } from 'sonner';
import { SCROLL_ASCII } from '@/constants/asciiArt';

const contactFormSchema = z.object({
  name: z.string().optional(),
  email: z
    .email({
      message: '',
    })
    .optional(),
  message: z.string().min(10, {
    message: '',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error sending message:', errorData);
        toast.error('Failed to send message. Please try again.');
      }

      // Show success toast
      toast("Thanks for reaching out. I'll get back to you soon");

      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="relative">
      <Container>
        <div
          className="mx-auto"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.2 }}
          // viewport={{ once: true }}
        >
          <div className="space-y-12 overflow-hidden">
            {/* Contact Header */}
            <div
              className="text-center"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.4 }}
              // viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-pp-editorial-new tracking-tight mb-6">
                Get in <span className="italic">Touch</span>
              </h2>
              {/* <div className="w-16 h-px bg-muted-foreground/30 mx-auto mb-6"></div> */}
              <pre className="text-muted-foreground/50 text-sm font-mono text-center mb-6">⎯ ✦ ⎯</pre>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                I&apos;m always interested in hearing about new opportunities, projects, or just having a chat.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* ASCII Art - Left Side */}
              <div
                className="justify-center items-center hidden md:flex"
                // initial={{ opacity: 0, x: -50 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.6, delay: 0.6 }}
                // viewport={{ once: true }}
              >
                <div className="flex justify-center items-center max-w-full overflow-hidden">
                  <pre className="text-[2.5px] md:text-[3px] lg:text-[3.5px] text-foreground select-none whitespace-pre font-mono leading-none origin-center hover:text-muted-foreground transition-colors">
                    {SCROLL_ASCII}
                  </pre>
                </div>
              </div>

              {/* Contact Form - Right Side */}
              <div
                className="space-y-6 h-full"
                // initial={{ opacity: 0, x: 50 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.6, delay: 0.8 }}
                // viewport={{ once: true }}
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col justify-center h-full">
                    <div className="grid grid-cols-1 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground ">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground ">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground ">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="resize-none max-h-40 min-h-24 h-full"
                              rows={6}
                              maxLength={500}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-start" 
                    // whileHover={{ scale: 1 }} whileTap={{ scale: 1 }}
                    >
                      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                          </>
                        ) : (
                          <>Send Message</>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>

            {/* Divider */}
            <div
              className="flex items-center justify-center"
              // initial={{ opacity: 0, scaleX: 0 }}
              // whileInView={{ opacity: 1, scaleX: 1 }}
              // transition={{ duration: 0.6, delay: 0.7 }}
              // viewport={{ once: true }}
            >
              <div className="flex-1 h-px bg-muted-foreground/10"></div>
              <span className="px-4 text-muted-foreground/50 font-pp-editorial-new text-xs xs:text-sm">OR</span>
              <div className="flex-1 h-px bg-muted-foreground/10"></div>
            </div>

            {/* Email contact */}
            <div
              className="text-center"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.5 }}
              // viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-4">Reach out directly at</p>
              <Link
                href={links.email}
                className="inline-block text-4xl xs:text-6xl md:text-8xl leading-relaxed font-pp-editorial-new text-foreground hover:text-foreground transition-all underline decoration-muted-foreground/0 hover:decoration-foreground"
              >
                <span className="italic">hello</span>@meshal.me
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
