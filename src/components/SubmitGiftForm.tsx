import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function SubmitGiftForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    setFormSubmitted(true);
    setTimeout(() => {
      setIsDialogOpen(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black dark:text-black dark:border-black dark:hover:bg-black dark:hover:text-white transition-all duration-300">
          <Gift className="mr-2" /> Submit Gift Idea
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white dark:bg-white dark:text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Submit a Gift Idea</DialogTitle>
        </DialogHeader>
        <AnimatePresence mode="wait">
          {!formSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 mt-4"
            >
              <div>
                <label htmlFor="giftName" className="block text-sm font-medium mb-1">Gift Name</label>
                <Input id="giftName" placeholder="Enter gift name" required className="bg-gray-800 text-white dark:bg-gray-200 dark:text-black" />
              </div>
              <div>
                <label htmlFor="giftType" className="block text-sm font-medium mb-1">Gift Type</label>
                <Input id="giftType" placeholder="E.g., Handmade, Electronics, etc." required className="bg-gray-800 text-white dark:bg-gray-200 dark:text-black" />
              </div>
              <div>
                <label htmlFor="giftDescription" className="block text-sm font-medium mb-1">Description</label>
                <Textarea id="giftDescription" placeholder="Describe the gift..." required className="bg-gray-800 text-white dark:bg-gray-200 dark:text-black" />
              </div>
              <div>
                <label htmlFor="giftLink" className="block text-sm font-medium mb-1">Link to Purchase</label>
                <Input id="giftLink" type="url" placeholder="https://example.com" required className="bg-gray-800 text-white dark:bg-gray-200 dark:text-black" />
              </div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800">
                Submit Gift Idea
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8"
            >
              <Gift className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>Your gift idea has been submitted successfully.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}