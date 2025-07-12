import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SocialMediaLinks() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/adbhutglobal',
      icon: Facebook,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/adbhutglobal',
      icon: Instagram,
      color: 'hover:text-pink-600',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/adbhutglobal',
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/adbhutglobal',
      icon: Linkedin,
      color: 'hover:text-blue-700',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@adbhutglobal',
      icon: Youtube,
      color: 'hover:text-red-600',
    },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            asChild
            className={`transition-colors ${social.color}`}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.name}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        )
      })}
    </div>
  )
}
