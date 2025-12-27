import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { razorpayService } from '@/lib/razorpay';
import { useEffect, useState } from 'react';

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialAmount?: number;
  isRecurring?: boolean;
  programTitle?: string;
  defaultDescription?: string;
}

const DonationModal = ({ 
  open, 
  onClose, 
  onSuccess, 
  initialAmount = 50, 
  isRecurring = false,
  programTitle = "",
  defaultDescription = "Support Aparigraha Foundation"
}: DonationModalProps) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [recurring, setRecurring] = useState<boolean>(isRecurring);
  const [description, setDescription] = useState<string>(defaultDescription);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  // Update amount when initialAmount changes
  useEffect(() => {
    setAmount(initialAmount);
  }, [initialAmount]);

  // Update recurring state when isRecurring prop changes
  useEffect(() => {
    setRecurring(isRecurring);
  }, [isRecurring]);

  // Update description when programTitle changes
  useEffect(() => {
    if (programTitle && defaultDescription.includes("Support for")) {
      setDescription(defaultDescription);
    } else if (!programTitle && defaultDescription === "Support for  program") {
      setDescription("Support Aparigraha Foundation");
    }
  }, [programTitle, defaultDescription]);

  const handleInputChange = (field: keyof typeof donorInfo, value: string) => {
    setDonorInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDonate = async () => {
    if (!donorInfo.name || !donorInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      if (recurring) {
        // For recurring payments, create a subscription
        const subscriptionId = await razorpayService.createSubscriptionPlan(amount);
        
        // Initialize subscription payment
        const response = await razorpayService.initializeSubscription({
          subscription_id: subscriptionId,
          name: "Aparigraha Foundation",
          description: description || `Monthly Donation for ${programTitle || "Aparigraha Foundation"}`,
          image: "/logo.png",
          prefill: {
            name: donorInfo.name,
            email: donorInfo.email,
            contact: donorInfo.phone
          },
          notes: {
            donor_name: donorInfo.name,
            donor_email: donorInfo.email,
            recurring: "true",
            amount: amount.toString(),
            program: programTitle
          },
          theme: {
            color: "#8B5CF6"
          },
          handler: () => {
            // Handler is called by razorpayService, but success is handled via Promise resolution
          }
        });

        // null means user closed the popup without completing
        if (response === null) {
          // User cancelled - no error toast needed
          return;
        }

        // Payment successful
        toast({
          title: "Subscription Successful!",
          description: `Thank you for setting up a monthly donation of ₹${amount} for ${programTitle || "Aparigraha Foundation"}.`,
        });
        
        if (onSuccess) onSuccess();
        onClose();
      } else {
        // Load Razorpay script and initialize one-time payment
        const response = await razorpayService.initializePayment({
          amount: amount * 100, // Convert to paise
          currency: "INR",
          name: "Aparigraha Foundation",
          description: description || `Donation for ${programTitle || "Aparigraha Foundation"}`,
          image: "/logo.png",
          prefill: {
            name: donorInfo.name,
            email: donorInfo.email,
            contact: donorInfo.phone
          },
          notes: {
            donor_name: donorInfo.name,
            donor_email: donorInfo.email,
            recurring: "false",
            amount: amount.toString(),
            program: programTitle
          },
          theme: {
            color: "#8B5CF6"
          },
          handler: () => {
            // Handler is called by razorpayService, but success is handled via Promise resolution
          }
        });

        // null means user closed the popup without completing
        if (response === null) {
          // User cancelled - no error toast needed
          return;
        }

        // Payment successful
        toast({
          title: "Donation Successful!",
          description: `Thank you for your generous donation of ₹${amount} for ${programTitle || "Aparigraha Foundation"}.`,
        });
        
        if (onSuccess) onSuccess();
        onClose();
      }
      
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{recurring ? "Setup AutoPay" : "Make a Donation"}</DialogTitle>
          <DialogDescription>
            {recurring 
              ? `Set up automatic monthly donations to support ${programTitle || "our work"}.` 
              : `Support ${programTitle || "Aparigraha Foundation"} with your generous contribution.`}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Donation Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="10"
              className="text-lg"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Donation Description (Optional)</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={recurring 
                ? `Monthly donation for ${programTitle || "Aparigraha Foundation"}` 
                : `Donation for ${programTitle || "Aparigraha Foundation"}`}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={donorInfo.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="e.g. Arjun Patel"
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={donorInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="e.g. arjun@example.com"
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              value={donorInfo.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="e.g. +91 98765 43210"
            />
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="recurring"
                checked={recurring}
                onCheckedChange={setRecurring}
              />
              <Label htmlFor="recurring">Enable AutoPay (Monthly)</Label>
            </div>
            <span className="text-sm text-muted-foreground">
              {recurring ? "₹" + amount + "/month" : "One-time"}
            </span>
          </div>
          
          <div className="pt-2">
            <div className="text-sm text-muted-foreground">
              {recurring 
                ? `Your card will be automatically charged ₹${amount} every month until you cancel.` 
                : `One-time donation of ₹${amount}`}
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleDonate} disabled={isLoading}>
            {isLoading ? "Processing..." : (recurring ? `Setup AutoPay ₹${amount}/month` : `Donate ₹${amount}`)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;