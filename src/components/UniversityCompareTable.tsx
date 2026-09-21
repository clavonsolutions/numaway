"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus, GraduationCap, MapPin, Trophy, DollarSign, Calendar, Briefcase, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { universities, University } from "@/data/universities";

interface CompareTableProps {
  initialUniversities?: string[];
}

const UniversityCompareTable = ({ initialUniversities = [] }: CompareTableProps) => {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(initialUniversities);
  const [isAddingUniversity, setIsAddingUniversity] = useState(false);

  const selectedUniversities = selectedSlugs
    .map(slug => universities.find(u => u.slug === slug))
    .filter(Boolean) as University[];

  const availableUniversities = universities.filter(u => !selectedSlugs.includes(u.slug));

  const addUniversity = (slug: string) => {
    if (selectedSlugs.length < 4) {
      setSelectedSlugs(prev => [...prev, slug]);
      setIsAddingUniversity(false);
    }
  };

  const removeUniversity = (slug: string) => {
    setSelectedSlugs(prev => prev.filter(s => s !== slug));
  };

  const compareFields = [
    { key: "ranking", label: "World Ranking", icon: Trophy, render: (u: University) => `#${u.ranking}` },
    { key: "country", label: "Country", icon: MapPin, render: (u: University) => `${u.countryFlag} ${u.country}` },
    { key: "type", label: "Type", icon: GraduationCap, render: (u: University) => u.type },
    { key: "tuition", label: "Tuition (avg/year)", icon: DollarSign, render: (u: University) => u.tuitionRange },
    { key: "acceptance", label: "Acceptance Rate", icon: Award, render: (u: University) => u.acceptanceRate || "N/A" },
    { key: "students", label: "Students", icon: Briefcase, render: (u: University) => u.students || "N/A" },
    { key: "founded", label: "Founded", icon: Calendar, render: (u: University) => u.founded || "N/A" },
  ];

  return (
    <div className="w-full">
      {/* Header Row - Universities */}
      <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `200px repeat(${Math.max(selectedUniversities.length, 1)}, 1fr) ${selectedSlugs.length < 4 ? "150px" : ""}` }}>
        <div className="font-display font-bold text-lg">Compare</div>
        
        {selectedUniversities.map((uni) => (
          <motion.div
            key={uni.slug}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-4 shadow-soft relative"
          >
            <button
              onClick={() => removeUniversity(uni.slug)}
              className="absolute top-2 right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            {uni.logo ? (
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm p-1">
                <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-3">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
            )}
            <h3 className="font-display font-bold text-sm mb-1 pr-6">{uni.name}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span>{uni.countryFlag}</span> {uni.country}
            </p>
          </motion.div>
        ))}

        {selectedSlugs.length === 0 && (
          <div className="bg-muted/50 border-2 border-dashed border-border rounded-2xl p-4 flex items-center justify-center text-center">
            <p className="text-sm text-muted-foreground">
              Add universities to compare
            </p>
          </div>
        )}

        {selectedSlugs.length < 4 && (
          <div className="relative">
            {isAddingUniversity ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-0 left-0 w-64 bg-card rounded-2xl shadow-card border border-border z-10 max-h-80 overflow-y-auto"
              >
                <div className="p-3 border-b border-border sticky top-0 bg-card">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">Select University</span>
                    <button onClick={() => setIsAddingUniversity(false)}>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-2">
                  {availableUniversities.slice(0, 10).map((uni) => (
                    <button
                      key={uni.slug}
                      onClick={() => addUniversity(uni.slug)}
                      className="w-full p-2 text-left hover:bg-muted rounded-lg transition-colors"
                    >
                      <div className="font-medium text-sm">{uni.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <span>{uni.countryFlag}</span> {uni.country}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <button
                onClick={() => setIsAddingUniversity(true)}
                className="w-full h-full min-h-[120px] bg-muted/50 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-secondary hover:bg-secondary/5 transition-colors"
              >
                <Plus className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Add</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Comparison Rows */}
      {selectedUniversities.length > 0 && (
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          {compareFields.map((field, index) => (
            <div
              key={field.key}
              className={`grid gap-4 p-4 ${index % 2 === 0 ? "bg-muted/30" : ""}`}
              style={{ gridTemplateColumns: `200px repeat(${selectedUniversities.length}, 1fr)` }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <field.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{field.label}</span>
              </div>
              {selectedUniversities.map((uni) => (
                <div key={uni.slug} className="font-medium text-sm">
                  {field.render(uni)}
                </div>
              ))}
            </div>
          ))}

          {/* Action Row */}
          <div
            className="grid gap-4 p-4 border-t border-border"
            style={{ gridTemplateColumns: `200px repeat(${selectedUniversities.length}, 1fr)` }}
          >
            <div className="text-sm font-medium text-muted-foreground">Actions</div>
            {selectedUniversities.map((uni) => (
              <div key={uni.slug} className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={`/universities/${uni.slug}`}>View Details</a>
                </Button>
                <Button variant="gold" size="sm" asChild>
                  <a href="/consultation">Apply</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {selectedUniversities.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-display font-bold mb-2">Compare Universities</h3>
          <p className="text-muted-foreground mb-6">
            Add up to 4 universities to compare their rankings, fees, and more.
          </p>
          <Button variant="gold" onClick={() => setIsAddingUniversity(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Add University
          </Button>
        </div>
      )}
    </div>
  );
};

export default UniversityCompareTable;
