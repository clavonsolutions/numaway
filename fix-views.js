const fs = require('fs');

function fixFile(filePath, imageVar, afterMarker) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('className="hidden lg:block"')) {
    console.log(filePath + ' already has the block');
    return;
  }
  
  const altText = filePath.includes('ForStudents') ? 'Happy Nigerian students graduating' : 'Historic university campus';
  
  const missing = `            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={(${imageVar} as any)?.src || ${imageVar} as any} 
                  alt="${altText}"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>`;

  if (content.includes(afterMarker)) {
    content = content.replace(`            </motion.div>\r\n\r\n      {/* ${afterMarker} */}`, `            </motion.div>\r\n\r\n` + missing + `\r\n\r\n      {/* ${afterMarker} */}`);
    content = content.replace(`            </motion.div>\n\n      {/* ${afterMarker} */}`, `            </motion.div>\n\n` + missing + `\n\n      {/* ${afterMarker} */}`);
    fs.writeFileSync(filePath, content);
    console.log('Fixed ' + filePath);
  }
}

fixFile('src/views/ForStudents.tsx', 'studentsImage', 'Benefits Section');
fixFile('src/views/ForInstitutions.tsx', 'institutionsImage', 'Stats Section');

// Also fix ForAgents.tsx
let contentAgents = fs.readFileSync('src/views/ForAgents.tsx', 'utf8');
if (contentAgents.includes('src={agentsImage}')) {
  contentAgents = contentAgents.replace('src={agentsImage}', 'src={(agentsImage as any)?.src || agentsImage as any}');
  fs.writeFileSync('src/views/ForAgents.tsx', contentAgents);
  console.log('Fixed ForAgents.tsx');
}

// Also fix ServiceDetail.tsx
let contentServices = fs.readFileSync('src/views/ServiceDetail.tsx', 'utf8');
if (contentServices.includes('src={serviceImage}')) {
  contentServices = contentServices.replace('src={serviceImage}', 'src={(serviceImage as any)?.src || serviceImage as any}');
  fs.writeFileSync('src/views/ServiceDetail.tsx', contentServices);
  console.log('Fixed ServiceDetail.tsx');
}
