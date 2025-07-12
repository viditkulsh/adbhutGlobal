# Hosting Configuration for Static Export

Since we're using `output: export` for static site generation, server-side features like redirects and headers need to be configured at the hosting provider level.

## Vercel Configuration

Create a `vercel.json` file in your project root:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/index",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/packages/travel_dest",
      "destination": "/packages",
      "permanent": true
    },
    {
      "source": "/packages/travel-dest",
      "destination": "/packages",
      "permanent": true
    },
    {
      "source": "/travel_packages",
      "destination": "/packages",
      "permanent": true
    },
    {
      "source": "/tour_packages",
      "destination": "/packages",
      "permanent": true
    }
  ]
}
```

## Netlify Configuration

Create a `_redirects` file in your `public` folder:

```
/home / 301
/index / 301
/packages/travel_dest /packages 301
/packages/travel-dest /packages 301
/travel_packages /packages 301
/tour_packages /packages 301
```

Create a `_headers` file in your `public` folder:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Apache Configuration

Create a `.htaccess` file in your output directory:

```apache
# Security Headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"

# Redirects
RewriteEngine On
RewriteRule ^home$ / [R=301,L]
RewriteRule ^index$ / [R=301,L]
RewriteRule ^packages/travel_dest$ /packages [R=301,L]
RewriteRule ^packages/travel-dest$ /packages [R=301,L]
RewriteRule ^travel_packages$ /packages [R=301,L]
RewriteRule ^tour_packages$ /packages [R=301,L]
```

## Nginx Configuration

Add to your nginx.conf:

```nginx
# Security Headers
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()";

# Redirects
location = /home { return 301 /; }
location = /index { return 301 /; }
location = /packages/travel_dest { return 301 /packages; }
location = /packages/travel-dest { return 301 /packages; }
location = /travel_packages { return 301 /packages; }
location = /tour_packages { return 301 /packages; }
```

Choose the configuration that matches your hosting provider.
