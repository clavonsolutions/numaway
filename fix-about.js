const fs = require('fs');

let content = fs.readFileSync('src/views/About.tsx', 'utf8');

const correctBlock = `<p className="font-semibold text-foreground">
                  We built NUMAWAY to change this.
                </p>
                <p>
                  We combine human counsellors who understand the realities of Nigerian students with 
                  intelligent AI tools that make information clear, personalised and available 24/7. 
                  The result is a study abroad experience that is structured, transparent and built around you.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Numaway team members helping a student plan their study abroad journey"
                className="w-full rounded-xl object-cover h-56 mt-8"
                loading="lazy"
                width="800"
                height="224"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-muted/50">`;

content = content.replace(
  /<p className="font-semibold text-foreground">\s*We built NUMAWAY to change this\.\s*<\/p>\s*<section className="py-24 bg-muted\/50">/g,
  correctBlock
);

fs.writeFileSync('src/views/About.tsx', content);
console.log('Fixed About.tsx');
