const fs = require('fs');
const path = require('path');

const imageMap = {
  '/images/heroes/student-graduate-1.jpg': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200',
  '/images/heroes/student-diploma-4.jpg': 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200',
  '/images/heroes/student-library-3.jpg': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
  '/images/about/about-mission.jpg': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
  '/images/about/about-team.jpg': 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200',
  '/images/heroes/student-2-600.jpg': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
  '/images/heroes/student-1-600.jpg': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200',
  '/images/heroes/student-campus-2.jpg': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200'
};

const filesToUpdate = [
  'src/views/WhyNumaway.tsx',
  'src/views/Scholarships.tsx',
  'src/views/Resources.tsx',
  'src/views/ResourceArticle.tsx',
  'src/views/PillarPage.tsx',
  'src/views/Loans.tsx',
  'src/views/FAQ.tsx',
  'src/views/Exams.tsx',
  'src/views/ExamDetail.tsx',
  'src/views/Courses.tsx',
  'src/views/CountryDetail.tsx',
  'src/views/Countries.tsx',
  'src/views/Accommodation.tsx'
];

let replacedCount = 0;

for (const relPath of filesToUpdate) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  for (const [localUrl, remoteUrl] of Object.entries(imageMap)) {
    if (content.includes(localUrl)) {
      content = content.split(localUrl).join(remoteUrl);
      hasChanges = true;
      replacedCount++;
    }
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in ${relPath}`);
  }
}

console.log(`Finished processing. Total replacements made: ${replacedCount}`);
