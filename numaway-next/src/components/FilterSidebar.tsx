import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  type: "checkbox" | "radio" | "range";
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (filterId: string, values: string[]) => void;
  onClearAll: () => void;
  className?: string;
}

const FilterSidebar = ({ filters, selectedFilters, onFilterChange, onClearAll, className = "" }: FilterSidebarProps) => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(filters.map(f => f.id));
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupId) ? prev.filter(id => id !== groupId) : [...prev, groupId]
    );
  };

  const handleOptionToggle = (filterId: string, value: string) => {
    const current = selectedFilters[filterId] || [];
    const newValues = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    onFilterChange(filterId, newValues);
  };

  const activeFilterCount = Object.values(selectedFilters).flat().length;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-lg">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-secondary hover:underline"
          >
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Filter Groups */}
      {filters.map((group) => (
        <div key={group.id} className="border-b border-border pb-4 last:border-0">
          <button
            onClick={() => toggleGroup(group.id)}
            className="w-full flex items-center justify-between py-2 text-left"
          >
            <span className="font-medium">{group.label}</span>
            {expandedGroups.includes(group.id) ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          
          {expandedGroups.includes(group.id) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-2 mt-2"
            >
              {group.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer hover:bg-muted rounded-lg p-2 -mx-2"
                >
                  <Checkbox
                    checked={(selectedFilters[group.id] || []).includes(option.value)}
                    onCheckedChange={() => handleOptionToggle(group.id, option.value)}
                  />
                  <span className="text-sm flex-1">{option.label}</span>
                  {option.count !== undefined && (
                    <span className="text-xs text-muted-foreground">({option.count})</span>
                  )}
                </label>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsMobileOpen(true)}
          className="w-full gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </Button>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/60"
            onClick={() => setIsMobileOpen(false)}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="absolute left-0 top-0 h-full w-80 bg-background p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg">Filters</h3>
              <button onClick={() => setIsMobileOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <FilterContent />
            <div className="mt-6">
              <Button
                variant="gold"
                className="w-full"
                onClick={() => setIsMobileOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className={`hidden lg:block bg-card rounded-2xl p-6 shadow-soft ${className}`}>
        <FilterContent />
      </div>
    </>
  );
};

export default FilterSidebar;
