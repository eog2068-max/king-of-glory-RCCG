"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Eye, Clock, AlertTriangle, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { pendingItems, type PriorityLevel, type PendingItem } from "./admin-data";

const priorityConfig: Record<
  PriorityLevel,
  { color: string; bg: string; icon: React.ElementType }
> = {
  high: {
    color: "text-[#DA251D]",
    bg: "bg-[#DA251D]/10 border-[#DA251D]/20",
    icon: AlertTriangle,
  },
  medium: {
    color: "text-[#C62828]",
    bg: "bg-[#C62828]/10 border-[#C62828]/20",
    icon: Clock,
  },
  low: {
    color: "text-[#28166F]/50",
    bg: "bg-[#28166F]/5 border-[#28166F]/10",
    icon: Minus,
  },
};

function getRelativeTime(timestamp: string): string {
  const now = new Date("2025-01-15T12:00:00Z");
  const then = new Date(timestamp);
  const diffMs = now.getTime() - then.getTime();
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

const typeButtonConfig: Record<string, { primary: string; secondary: string }> = {
  Testimony: { primary: "Approve", secondary: "Reject" },
  "Prayer Request": { primary: "Review", secondary: "Dismiss" },
  "Event Registration": { primary: "Confirm", secondary: "Decline" },
  Sermon: { primary: "Approve", secondary: "Reject" },
  Announcement: { primary: "Publish", secondary: "Edit" },
};

function PendingItemRow({ item }: { item: PendingItem }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [action, setAction] = useState<string | null>(null);
  const priority = priorityConfig[item.priority];
  const PriorityIcon = priority.icon;
  const buttons = typeButtonConfig[item.type] || {
    primary: "Review",
    secondary: "Dismiss",
  };

  const handleAction = (actionType: string) => {
    setAction(actionType);
    setTimeout(() => {
      if (actionType === buttons.secondary) {
        setIsDismissed(true);
      }
      setAction(null);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-3 overflow-hidden rounded-lg border border-[#EBF0FA] bg-white p-3 transition-shadow hover:shadow-sm"
        >
          <div className="flex items-start gap-2.5">
            <div
              className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border ${priority.bg}`}
            >
              <PriorityIcon className={`size-3.5 ${priority.color}`} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge
                  variant="outline"
                  className="rounded-full border-[#EBF0FA] bg-[#E8E0F0] px-2 py-0 text-[10px] font-semibold text-[#28166F]/70"
                >
                  {item.type}
                </Badge>
                <span className="text-[10px] text-[#28166F]/40">
                  {getRelativeTime(item.submittedAt)}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium leading-snug text-[#28166F]">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs text-[#28166F]/50">
                by {item.submittedBy}
              </p>

              <div className="mt-2.5 flex items-center gap-2">
                <Button
                  size="sm"
                  className="h-7 rounded-md bg-[#28166F] px-3 text-xs font-medium text-white hover:bg-[#28166F]/90"
                  onClick={() => handleAction(buttons.primary)}
                  disabled={action !== null}
                >
                  {action === buttons.primary ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-1"
                    >
                      <Check className="size-3" />
                      Done
                    </motion.span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Check className="size-3" />
                      {buttons.primary}
                    </span>
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 rounded-md border-[#EBF0FA] px-3 text-xs font-medium text-[#28166F]/60 hover:border-[#DA251D]/30 hover:bg-[#DA251D]/5 hover:text-[#DA251D]"
                  onClick={() => handleAction(buttons.secondary)}
                  disabled={action !== null}
                >
                  {action === buttons.secondary ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-1"
                    >
                      <Check className="size-3" />
                      Done
                    </motion.span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <X className="size-3" />
                      {buttons.secondary}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PendingItems() {
  return (
    <Card className="border-[#EBF0FA] bg-white shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-[#28166F]">
            Pending Review
          </CardTitle>
          <Badge className="rounded-full bg-[#DA251D] px-2 py-0.5 text-xs font-semibold text-white">
            {pendingItems.length} items
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="max-h-[440px] px-6">
          <div className="py-4">
            {pendingItems.map((item) => (
              <PendingItemRow key={item.id} item={item} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}