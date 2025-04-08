"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { 
  Calendar, 
  Users, 
  MapPin, 
  DollarSign, 
  ListChecks, 
  Sparkles,
  Mail,
  Phone,
  Building
} from "lucide-react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function CorporateForm() {
  const [formData, setFormData] = useState<{
    destination: string;
    startDate: Date | null;
    endDate: Date | null;
    groupSize: string;
    budget: string;
    eventType: string;
    addOns: string;
    notes: string;
    companyName: string;
    contactEmail: string;
    contactPhone: string;
  }>({
    destination: "",
    startDate: null,
    endDate: null,
    groupSize: "",
    budget: "",
    eventType: "",
    addOns: "",
    notes: "",
    companyName: "",
    contactEmail: "",
    contactPhone: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      })
      return
    }
    
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Success",
        description: "Your enquiry has been submitted successfully!",
      })
      setFormData({
        destination: "",
        startDate: null,
        endDate: null,
        groupSize: "",
        budget: "",
        eventType: "",
        addOns: "",
        notes: "",
        companyName: "",
        contactEmail: "",
        contactPhone: ""
      })
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Corporate Enquiry Form</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Plan your perfect corporate event with us</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Information Section */}
        <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Your company"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="email@company.com"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Section */}
        <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Event Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="destination">Destination *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Event location"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Event Type</Label>
              <Select 
                value={formData.eventType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="incentive">Incentive Trip</SelectItem>
                  <SelectItem value="team-building">Team Building</SelectItem>
                  <SelectItem value="training">Training Workshop</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Start Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <DatePicker
                  selected={formData.startDate}
                  onChange={(date: Date | null) => setFormData(prev => ({ ...prev, startDate: date }))}
                  placeholderText="Select start date"
                  className="w-full pl-10 border border-gray-200 rounded-md p-2 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  minDate={new Date()}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>End Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <DatePicker
                  selected={formData.endDate}
                  onChange={(date: Date | null) => setFormData(prev => ({ ...prev, endDate: date }))}
                  placeholderText="Select end date"
                  className="w-full pl-10 border border-gray-200 rounded-md p-2 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  minDate={formData.startDate || new Date()}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="groupSize">Group Size</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="groupSize"
                  name="groupSize"
                  type="number"
                  min="1"
                  value={formData.groupSize}
                  onChange={handleInputChange}
                  placeholder="Number of attendees"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="e.g., $5,000 - $10,000"
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Additional Information</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="addOns">Add-on Services</Label>
              <div className="relative">
                <ListChecks className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  id="addOns"
                  name="addOns"
                  value={formData.addOns}
                  onChange={handleInputChange}
                  placeholder="e.g., AV equipment, tour guides"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea 
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Special requests or additional details..."
                className="min-h-[100px]"
              />
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Send Enquiry
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  )
}