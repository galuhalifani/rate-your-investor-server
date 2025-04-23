# Rate Your Investor

A web app for founders to add review for potential investors. Current database are dummy / mockup data (not real founders/investors).

- View and add new review
- As a founder, request to register new investor
- Receive confirmation if investor has been approved by admin
- View translated reviews from over 5 different languages
- Comment on reviews

### DEMO
**Visit [Website](https://rate-your-investor.web.app/) to View Demo**

Register as new user, or if you want to login with existing "admin" account, use the following login credentials: 

- email: rateyourinvestor@gmail.com
- password: password123

Server site: 
https://rate-your-investor.herokuapp.com

### Development Scope
**Scope**: Full-Stack

**Related Repos**:

- Rate Your Investor Client (Frontend): https://github.com/galuhalifani/rate-your-investor-client 

### Tech Stacks
**Frontend**

```Vue JS```
```Vuex```
```Axios```
```Vue Disqus```
```Firebase```

**Backend**

```Node JS```
```Express```
```Sequelize (PostgreSQL)```
```Nodemailer```
```Google Translate API```
```News API```
```Heroku```

&nbsp;

## RESTful endpoints
### GET /reviews

> Get all reviews

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 1,
        "FounderId": 2,
        "InvestorId": 1,
        "reviewer": "Anonymous",
        "title": "Slow Response",
        "investor_role": "Lead",
        "investment_stage": "Seed",
        "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
        "rating_overall": 2,
        "rating_professionalism": 3,
        "rating_speed": 1,
        "rating_dd_complexity": 3,
        "rating_post_inv_support": 0,
        "rating_founder_friendly": 2,
        "likes": 1,
        "likes_id": [
            2
        ],
        "status": "Unverified",
        "createdAt": "2021-06-29T10:38:55.495Z",
        "updatedAt": "2021-06-29T10:41:31.530Z",
        "Investor": {
            "id": 2,
            "name": "BigMoney VC",
            "company_name": "BigMoney VC",
            "region": "Southeast Asia",
            "industry": "Multi-Industry",
            "website_url": "https://www.bigmoneyvc.com",
            "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
            "investor_type": "Venture Capital",
            "status": "Verified",
            "createdAt": "2021-06-29T11:59:56.532Z",
            "updatedAt": "2021-06-29T12:00:42.600Z"
        },
        "Founder": {
            "id": 2,
            "first_name": "Ilya",
            "last_name": "Kravtsov",
            "username": "Ilya85",
            "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
            "email": "ik@pouchnation.com",
            "phoneNumber": "6287875343066",
            "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
            "region": "Southeast Asia",
            "company_name": "PouchNation",
            "role": "CEO & Founder",
            "company_website": "https://www.pouchnation.com",
            "company_industry": "Media & Entertainment",
            "team_size": "21-50",
            "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
            "admin_status": false,
            "active_status": true,
            "createdAt": "2021-06-29T08:34:59.661Z",
            "updatedAt": "2021-06-29T09:18:50.446Z"
        }
    },
    {
        "id": 2,
        "FounderId": 2,
        "InvestorId": 2,
        "reviewer": "Anonymous",
        "title": "Great Support post investment",
        "investor_role": "Lead",
        "investment_stage": "Series A",
        "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
        "rating_overall": 5,
        "rating_professionalism": 5,
        "rating_speed": 3,
        "rating_dd_complexity": 4,
        "rating_post_inv_support": 5,
        "rating_founder_friendly": 5,
        "likes": 1,
        "likes_id": [
            2
        ],
        "status": "Verified",
        "createdAt": "2021-06-29T12:01:41.905Z",
        "updatedAt": "2021-06-29T12:06:33.879Z",
        "Investor": {
            "id": 2,
            "name": "BigMoney VC",
            "company_name": "BigMoney VC",
            "region": "Southeast Asia",
            "industry": "Multi-Industry",
            "website_url": "https://www.bigmoneyvc.com",
            "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
            "investor_type": "Venture Capital",
            "status": "Verified",
            "createdAt": "2021-06-29T11:59:56.532Z",
            "updatedAt": "2021-06-29T12:00:42.600Z"
        },
        "Founder": {
            "id": 2,
            "first_name": "Ilya",
            "last_name": "Kravtsov",
            "username": "Ilya85",
            "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
            "email": "ik@pouchnation.com",
            "phoneNumber": "6287875343066",
            "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
            "region": "Southeast Asia",
            "company_name": "PouchNation",
            "role": "CEO & Founder",
            "company_website": "https://www.pouchnation.com",
            "company_industry": "Media & Entertainment",
            "team_size": "21-50",
            "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
            "admin_status": false,
            "active_status": true,
            "createdAt": "2021-06-29T08:34:59.661Z",
            "updatedAt": "2021-06-29T09:18:50.446Z"
        }
    }
]
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /reviews/:id

> Get review by Id

_Request Header_
```
not needed
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "FounderId": 2,
    "InvestorId": 1,
    "reviewer": "Anonymous",
    "title": "Slow Response",
    "investor_role": "Lead",
    "investment_stage": "Seed",
    "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
    "rating_overall": 2,
    "rating_professionalism": 3,
    "rating_speed": 1,
    "rating_dd_complexity": 3,
    "rating_post_inv_support": 0,
    "rating_founder_friendly": 2,
    "likes": 1,
    "likes_id": [
        2
    ],
    "status": "Unverified",
    "createdAt": "2021-06-29T10:38:55.495Z",
    "updatedAt": "2021-06-29T10:41:31.530Z",
    "Investor": {
        "id": 2,
        "name": "BigMoney VC",
        "company_name": "BigMoney VC",
        "region": "Southeast Asia",
        "industry": "Multi-Industry",
        "website_url": "https://www.bigmoneyvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Verified",
        "createdAt": "2021-06-29T11:59:56.532Z",
        "updatedAt": "2021-06-29T12:00:42.600Z"
    },
    "Founder": {
        "id": 2,
        "first_name": "Ilya",
        "last_name": "Kravtsov",
        "username": "Ilya85",
        "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
        "email": "ik@pouchnation.com",
        "phoneNumber": "6287875343066",
        "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
        "region": "Southeast Asia",
        "company_name": "PouchNation",
        "role": "CEO & Founder",
        "company_website": "https://www.pouchnation.com",
        "company_industry": "Media & Entertainment",
        "team_size": "21-50",
        "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
        "admin_status": false,
        "active_status": true,
        "createdAt": "2021-06-29T08:34:59.661Z",
        "updatedAt": "2021-06-29T09:18:50.446Z"
    }
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: review not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /reviews

> Create new review

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Body_
```
{
    "InvestorId": 1,
    "reviewer": "Anonymous",
    "title": "Great Support post investment",
    "investor_role": "Lead",   
    "investment_stage": "Series A",
    "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
    "rating_overall": 5,
    "rating_professionalism": 5,   
    "rating_speed": 3,
    "rating_dd_complexity": 4,
    "rating_post_inv_support": 5,
    "rating_founder_friendly": 5
}
```

_Response (201 - Created)_
```
{
    "id": 3,
    "FounderId": 2,
    "InvestorId": 1,
    "reviewer": "Anonymous",
    "title": "Slow Response",
    "investor_role": "Lead",
    "investment_stage": "Seed",
    "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
    "rating_overall": 2,
    "rating_professionalism": 3,
    "rating_speed": 1,
    "rating_dd_complexity": 3,
    "rating_post_inv_support": 0,
    "rating_founder_friendly": 2,
    "likes": 0,
    "likes_id": [],
    "status": "Unverified",
    "createdAt": "2021-06-29T10:38:55.495Z",
    "updatedAt": "2021-06-29T10:41:31.530Z",
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Unauthorized",
    "message": "Please verify your account (email address) first"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /register

> Register new user (founder)

_Request Header_
```
not needed
```

_Request Body_
```
{
    "first_name": "Ilya",
    "last_name": "Kravtsov",
    "username": "Ilya85",   
    "email": "ik@pouchnation@.com",
    "password": "Kravtsov85",
    "role": "CEO & Founder",
    "phoneNumber": "6287875343066",
    "profilePic: <file_upload>,
    "region": "Southeast Asia",
    "company_name": "PouchNATION",
    "company_website": "https://www.pouchnation.com",
    "company_industry": "Media & Entertainment",
    "team_size": "21-50",
    "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/"
}
```

_Response (201)_
```
{
    "message": "Success registering a new founder",
    "id": 2,
    "first_name": "Ilya",
    "last_name": "Kravtsov",
    "username": "Ilya85",
    "email": "ik@pouchnation.com",
    "role": "CEO & Founder",
    "phoneNumber": "6287875343066",
    "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
    "region": "Southeast Asia",
    "company_name": "PouchNation",
    "company_website": "https://www.pouchnation.com",
    "company_industry": "Media & Entertainment",
    "team_size": "21-50",
    "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
    "admin_status": false,
    "active_status": false
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Input Error",
    "message": [
        "<validation error message>"
    ]
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /login

> Login user

_Request Header_
```
not needed
```

_Request Body_
```
{
    "email": "rateyourinvestor@gmail.com",
    "password": "password123"
}
```

_Response (200)_
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkFkbWluIiwibGFzdF9uYW1lIjoiVXNlciIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6InJhdGV5b3VyaW52ZXN0b3JAZ21haWwuY29tIiwicm9sZSI6IkFkbWluLCBSYXRlIFlvdXIgSW52ZXN0b3IiLCJwaG9uZU51bWJlciI6IjYyODEzMTkwMjMyNjQiLCJwcm9maWxlUGljIjoiIiwicmVnaW9uIjoiU291dGhlYXN0IEFzaWEiLCJjb21wYW55X25hbWUiOiJSYXRlIFlvdXIgSW52ZXN0b3IiLCJjb21wYW55X3dlYnNpdGUiOiIiLCJjb21wYW55X2luZHVzdHJ5IjoiIiwidGVhbV9zaXplIjoiMS0yMCIsImxpbmtlZGluX3VybCI6IiIsImFkbWluX3N0YXR1cyI6dHJ1ZSwiYWN0aXZlX3N0YXR1cyI6dHJ1ZSwiaWF0IjoxNjI0OTY4OTYyfQ.BgOj6-qGC0z42PtLWKafX7PKDOjPIykelO1BGpgv-6k",
    "user": {
        "id": 1,
        "first_name": "Admin",
        "last_name": "User",
        "username": "admin",
        "email": "rateyourinvestor@gmail.com",
        "role": "Admin, Rate Your Investor",
        "phoneNumber": "6281319023264",
        "profilePic": "",
        "region": "Southeast Asia",
        "company_name": "Rate Your Investor",
        "company_website": "",
        "company_industry": "",
        "team_size": "1-20",
        "linkedin_url": "",
        "admin_status": true,
        "active_status": true
    }
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Invalid username/password"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /googlelogin

> Login user from Google OAuth

_Request Header_
```
not needed
```

_Request Body_
```
{
  idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhMWQyNmQ5OTJiZTdhNGI2ODliZGNlMTkxMWY0ZTlhZGM3NWQ5ZjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTQ4NTI0NzA2NDY2LXNtcDVqNW5tOGc2Mzlxc2d1ZzltN2k2ZWx1Ym1jZGdjLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0NTAyMzEzNDk1NDczMjU5NDIwIiwiZW1haWwiOiJnYWx1aGFkaWthYWxpZmFuaUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkNYOWVOc1F3MXE1ZDRnbC1PNDRMcEEiLCJuYW1lIjoiQWxpZmFuaSBHLiBBLiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4RkozaHMwTzB0YVdpeEREaVRMWm5RYTBVenZkQmJ5bG1kSW9ESz1zOTYtYyIsImdpdmVuX25hbWUiOiJBbGlmYW5pIiwiZmFtaWx5X25hbWUiOiJHLiBBLiIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjIzNDczMTc5LCJleHAiOjE2MjM0NzY3NzksImp0aSI6IjMzMjFmMGUyZThhNDlhOGM3NTdiZWUwMTE2Mjk5NTRhYWRlYTQ3NjUifQ.CCTMDk38O-zNkOWQvnZDOCs_xxlfRJJHNHACB5FfB18APd1gCxrm6teHyH6YgLnei69IWvj5cp0n509yGNhAyCwYZKgZMhzxyJk_-l3FgEIzOJdqqxG1KMKutzoJC7ks-nHl_SPpnPlBjxn4L1lTCEC0jGkiWLHdpn8pZBiBvOrhbr9S7kkK19wVEVO_tyVGSZ_TOK6oiw0ldm1ePpw8qSYtKHT2nEbpVXrAfDr5IIyUWPmpDo5aTKfkCRgG0qjaUGs6SdostOcvHt9KBjlD7GztruSNDKGz5D-nPQQBjpRYd46mR1VHYwBjhS565RapaE-BPntihJasasdasdasdasdasd'
}
```

_Response (200)_
```
{
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IkFsaWZhbmkgRy4gQS4iLCJ1c2VybmFtZSI6ImdhbHVoYWRpa2FhbGlmYW5pQGdtYWlsLmNvbSIsImVtYWlsIjoiZ2FsdWhhZGlrYWFsaWZhbmlAZ21haWwuY29tIiwicm9sZSI6InN0YWZmIiwiaWF0IjoxNjIzNDczMzIxfQ.BpzPHMHcRcaIJL1FLwZEdVg_fasdasdasdasdasdasdasdasd',
  user: {
    "id": 1,
    "first_name": "Admin",
    "last_name": "User",
    "username": "admin",
    "email": "rateyourinvestor@gmail.com",
    "role": "Admin, Rate Your Investor",
    "phoneNumber": "6281319023264",
    "profilePic": "",
    "region": "Southeast Asia",
    "company_name": "Rate Your Investor",
    "company_website": "",
    "company_industry": "",
    "team_size": "1-20",
    "linkedin_url": "",
    "admin_status": true,
    "active_status": true
  }  
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /founders

> Get all founders with admin_status = false

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 2,
        "first_name": "Ilya",
        "last_name": "Kravtsov",
        "username": "Ilya85",
        "email": "ik@pouchnation.com",
        "role": "CEO & Founder",
        "phoneNumber": "6287875343066",
        "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
        "region": "Southeast Asia",
        "company_name": "PouchNation",
        "company_website": "https://www.pouchnation.com",
        "company_industry": "Media & Entertainment",
        "team_size": "21-50",
        "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
        "admin_status": false,
        "active_status": true
    }
]
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /founders/:id

> Get founder by id

_Request Header_
```
not needed
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 2,
    "first_name": "Ilya",
    "last_name": "Kravtsov",
    "username": "Ilya85",
    "email": "ik@pouchnation.com",
    "role": "CEO & Founder",
    "phoneNumber": "6287875343066",
    "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
    "region": "Southeast Asia",
    "company_name": "PouchNation",
    "company_website": "https://www.pouchnation.com",
    "company_industry": "Media & Entertainment",
    "team_size": "21-50",
    "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
    "admin_status": false,
    "active_status": true,
    "reviews": [
        {
            "id": 1,
            "FounderId": 2,
            "InvestorId": 1,
            "reviewer": "Anonymous",
            "title": "Slow Response",
            "investor_role": "Lead",
            "investment_stage": "Seed",
            "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
            "rating_overall": 2,
            "rating_professionalism": 3,
            "rating_speed": 1,
            "rating_dd_complexity": 3,
            "rating_post_inv_support": 0,
            "rating_founder_friendly": 2,
            "likes": 1,
            "likes_id": [
                2
            ],
            "status": "Unverified",
            "createdAt": "2021-06-29T10:38:55.495Z",
            "updatedAt": "2021-06-29T10:41:31.530Z",
            "Investor": {
                "id": 1,
                "name": "Jump VC",
                "company_name": "Jump VC",
                "region": "China & Hong-Kong",
                "industry": "Media & Entertainment",
                "website_url": "https://www.jumpvc.com",
                "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
                "investor_type": "Venture Capital",
                "status": "Verified",
                "createdAt": "2021-06-29T09:20:57.032Z",
                "updatedAt": "2021-06-29T12:22:11.075Z"
            }
        },
        {
            "id": 2,
            "FounderId": 2,
            "InvestorId": 2,
            "reviewer": "Anonymous",
            "title": "Great Support post investment",
            "investor_role": "Lead",
            "investment_stage": "Series A",
            "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
            "rating_overall": 5,
            "rating_professionalism": 5,
            "rating_speed": 3,
            "rating_dd_complexity": 4,
            "rating_post_inv_support": 5,
            "rating_founder_friendly": 5,
            "likes": 1,
            "likes_id": [
                2
            ],
            "status": "Verified",
            "createdAt": "2021-06-29T12:01:41.905Z",
            "updatedAt": "2021-06-29T12:06:33.879Z",
            "Investor": {
                "id": 2,
                "name": "BigMoney VC",
                "company_name": "BigMoney VC",
                "region": "Southeast Asia",
                "industry": "Multi-Industry",
                "website_url": "https://www.bigmoneyvc.com",
                "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
                "investor_type": "Venture Capital",
                "status": "Verified",
                "createdAt": "2021-06-29T11:59:56.532Z",
                "updatedAt": "2021-06-29T12:00:42.600Z"
            }
        }
    ]
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PATCH /reviews/verify/:id

> Update review status

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message": "Review with ID 3 is now verified"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "Only Admin is authorized to perform this action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: review not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PATCH /investors/verify/:id

> Update investor status

_Request Header_
```
{
    "accessToken": "<accesstoken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message": "Jump VC is now verified. Whatsapp Notification Sent to 6281319023264"
}
```

_Response (401 - Unauthorized)_
```
{
    "error": "Unauthorized",
    "message": "Please login first"
}
```
```
{
    "error": "Unauthorized",
    "message": "Invalid User / Login Credentials"
}
```

_Response (403 - Forbidden)_
```
{
    "error": "Forbidden",
    "message": "Only Admin is authorized to perform this action"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /investors

> Get verified investors

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 2,
        "name": "BigMoney VC",
        "company_name": "BigMoney VC",
        "region": "Southeast Asia",
        "industry": "Multi-Industry",
        "website_url": "https://www.bigmoneyvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Verified"
    },
    {
        "id": 1,
        "name": "Jump VC",
        "company_name": "Jump VC",
        "region": "China & Hong-Kong",
        "industry": "Media & Entertainment",
        "website_url": "https://www.jumpvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Verified"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /investors/all

> Get all investors

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 2,
        "name": "BigMoney VC",
        "company_name": "BigMoney VC",
        "region": "Southeast Asia",
        "industry": "Multi-Industry",
        "website_url": "https://www.bigmoneyvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Unverified"
    },
    {
        "id": 1,
        "name": "Jump VC",
        "company_name": "Jump VC",
        "region": "China & Hong-Kong",
        "industry": "Media & Entertainment",
        "website_url": "https://www.jumpvc.com",
        "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
        "investor_type": "Venture Capital",
        "status": "Verified"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### GET /investors/:id

> Get investor by id

_Request Header_
```
not needed
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 2,
    "name": "BigMoney VC",
    "company_name": "BigMoney VC",
    "region": "Southeast Asia",
    "industry": "Multi-Industry",
    "website_url": "https://www.bigmoneyvc.com",
    "linkedin_url": "https://www.linkedin.com/company/jump-informatique/",
    "investor_type": "Venture Capital",
    "status": "Verified",
    "reviews": [
        {
            "id": 3,
            "FounderId": 2,
            "InvestorId": 2,
            "reviewer": "Anonymous",
            "title": "Great Support post investment",
            "investor_role": "Lead",
            "investment_stage": "Series A",
            "review": "The VC was very helpful after the investment with the advises and introductions. They even helped me to raise the next round.",
            "rating_overall": 5,
            "rating_professionalism": 5,
            "rating_speed": 3,
            "rating_dd_complexity": 4,
            "rating_post_inv_support": 5,
            "rating_founder_friendly": 5,
            "likes": 1,
            "likes_id": [
                2
            ],
            "status": "Verified",
            "createdAt": "2021-06-29T12:01:41.905Z",
            "updatedAt": "2021-06-29T12:06:33.879Z",
            "Founder": {
                "id": 2,
                "first_name": "Ilya",
                "last_name": "Kravtsov",
                "username": "Ilya85",
                "password": "$2a$05$MXiruX7TifzZER5W3IKsxO744s/JMKHG.rh2MBBlCBgtILedhzjF6",
                "email": "ik@pouchnation.com",
                "phoneNumber": "6287875343066",
                "profilePic": "https://ik.imagekit.io/77pzczg37zw/IK.jpg",
                "region": "Southeast Asia",
                "company_name": "PouchNation",
                "role": "CEO & Founder",
                "company_website": "https://www.pouchnation.com",
                "company_industry": "Media & Entertainment",
                "team_size": "21-50",
                "linkedin_url": "https://www.linkedin.com/in/ilya-kravtsov-0108124/",
                "admin_status": false,
                "active_status": true,
                "createdAt": "2021-06-29T08:34:59.661Z",
                "updatedAt": "2021-06-29T09:18:50.446Z"
            }
        }
    ]
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PATCH /founders/verify/:id

> Update founder status

_Request Header_
```
not needed
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message":  "Thanks Galuh for verifying! Your account is active, you can now write a new review"
}
```

_Response (404 - Not Found)_
```
{
    "message": "error: user not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
### GET /news

> Get all news from 3rd party API

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "source": {
            "id": null,
            "name": "Rappler"
        },
        "author": "Reuters",
        "title": "Crypto art about gender transition fetches $2.16M at Christie's - Rappler",
        "description": "'I feel like, a lot of times, trans voices aren't heard or aren't as respected, so to have my platform to say 'hey look, this is my life and look at what we're doing' – it means the world,' says artist Victor Langlois",
        "url": "https://www.rappler.com/technology/crypto-art-gender-transition-christies-auction-june-2021",
        "urlToImage": "https://assets2.rappler.com/2021/07/crypto-art-1625106362064.jpg",
        "publishedAt": "2021-07-01T02:26:00Z",
        "content": "\"I feel like, a lot of times, trans voices aren't heard or aren't as respected, so to have my platform to say 'hey look, this is my life and look at what we're doing' it means the world,\" Langlois sa… [+18 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Kotaku Australia"
        },
        "author": null,
        "title": "Cyberpunk 2077's Jackie Deserved Better - Kotaku Australia",
        "description": "When CD Projekt Red eventually get fixes out for Cyberpunk 2077, the studio might be able to finally give Jackie the billing he deserves.",
        "url": "https://www.kotaku.com.au/2021/07/cyberpunk-2077-jackie-deserved-better/",
        "urlToImage": "https://imgix.kotaku.com.au/content/uploads/sites/3/2020/12/15/cyberpunk-2077-jackie-1.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280",
        "publishedAt": "2021-07-01T02:00:00Z",
        "content": "Cyberpunk 2077‘s performance is apparently fine and it’s back on the PlayStation Store. Which is great and all, because it means that CD Projekt Red might be able to start correcting some of the game… [+9950 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GSMArena.com"
        },
        "author": "Vlad",
        "title": "Samsung Galaxy A03s gets Bluetooth certified on its way to the market - GSMArena.com news - GSMArena.com",
        "description": "The A03s first leaked last month, and its official unveiling can't be far.",
        "url": "https://www.gsmarena.com/samsung_galaxy_a03s_gets_bluetooth_certified_on_its_way_to_the_market-news-49827.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/21/06/galaxy-a03s-bluetooth/-476x249w4/gsmarena_001.jpg",
        "publishedAt": "2021-07-01T01:57:01Z",
        "content": "Samsung is working on revamping its entry-level model in the A-series, the one that starts with a zero. The Galaxy A03s has already leaked in some detail back in May, and now it's been spotted at the… [+900 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SiliconANGLE News"
        },
        "author": null,
        "title": "Instagram spreads wings with plans to add paying subscribers and focus on video - SiliconANGLE News",
        "description": "Instagram spreads wings with plans to add paying subscribers and focus on video - SiliconANGLE",
        "url": "https://siliconangle.com/2021/06/30/instagram-spreads-wings-plans-add-paying-subscribers-focus-more-video/",
        "urlToImage": "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2021/06/alexander-shatov-71Qk8ODIBko-unsplash-1.jpg",
        "publishedAt": "2021-07-01T01:30:09Z",
        "content": "Facebook Inc.-owned Instagram said today its planning to add a paid subscription model to the platform so fans can see exclusive content from those they follow.\r\nSimilar to what Twitter Inc. recently… [+2603 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Nintendo Life"
        },
        "author": "Nintendo Life",
        "title": "AI: The Somnium Files – nirvanA Initiative Announced For Nintendo Switch - Nintendo Life",
        "description": "Arriving in Spring 2022",
        "url": "https://www.nintendolife.com/news/2021/07/ai_the_somnium_files_n_nirvana_initiative_announced_for_nintendo_switch",
        "urlToImage": "https://images.nintendolife.com/c212062afaae0/1280x720.jpg",
        "publishedAt": "2021-07-01T01:30:00Z",
        "content": "Spike Chunsoft has just announced AI: The Somnium Files nirvanA Initiative is coming to Switch in Spring 2022.\r\nIt's a sequel to the original 2019 detective adventure release. The reveal trailer has … [+839 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Kotaku Australia"
        },
        "author": null,
        "title": "Sea of Thieves: A Pirate’s Life Has A Very Fun Easter Egg - Kotaku Australia",
        "description": "The whole point of Sea of Thieves: A Pirates Life was that it served as a crossover event between Rare’s...",
        "url": "https://www.kotaku.com.au/2021/07/sea-of-thieves-a-pirates-life-has-a-very-fun-easter-egg/",
        "urlToImage": "https://imgix.kotaku.com.au/content/uploads/sites/3/2021/07/01/3c985b2bf439178c4c33d456b2d058ea.png?ar=16%3A9&auto=format&fit=crop&q=65&w=1280",
        "publishedAt": "2021-07-01T01:00:00Z",
        "content": "The whole point of Sea of Thieves: A Pirates Life was that it served as a crossover event between Rares pirate game and Disneys Pirates of the Caribbean series. But tucked away at the end of the expa… [+1430 chars]"
    }
]
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### POST /reviews/translate/:id

> Get translated text from a review content

_Request Header_
```
not needed
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
{
    "language": "<language_code>"
}
```

_Response (200)_
```
"Respon sangat lambat. Saya melakukan beberapa pertemuan dengan VC namun prosesnya tidak transparan dan sangat lambat. Pada akhirnya, kesepakatan berhasil, tetapi kami harus menunggu lebih dari 10 bulan agar seluruh proses selesai, karena setiap pertemuan, subjek dari pertemuan terakhir diulang"
```

_Response (400 - Bad Request)_
```
{
    "error": "Bad Request",
    "message": "Please define your language"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
---
### PATCH /reviews/like/:id

> Add like to a review

_Request Header_
```
{
    "accessToken": "<accessToken>"
}
```

_Request Params_
```
{
    "id": integer (required)
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "FounderId": 2,
    "InvestorId": 1,
    "reviewer": "Anonymous",
    "title": "Slow Response",
    "investor_role": "Lead Investor",
    "investment_stage": "Seed",
    "review": "Very slow response. I did a few meetings with the VC however the processes was not transparent and extremely slow. At the end, the deal went through, but we needed to wait more than 10 months for the entire process to pass through, since every single meeting, the subject from last meetings were repeated",
    "rating_overall": 2,
    "rating_professionalism": 3,
    "rating_speed": 1,
    "rating_dd_complexity": 3,
    "rating_post_inv_support": 0,
    "rating_founder_friendly": 2,
    "likes": 4,
    "likes_id": [
        2,
        3,
        4,
        1
    ],
    "status": "Unverified",
    "createdAt": "2021-06-29T10:38:55.495Z",
    "updatedAt": "2021-07-01T04:19:00.076Z"
}
```

_Response (400 - Bad Request)_
```
{
    "error": "Bad Request",
    "message": "You have already liked this review"
}
```

_Response (400 - Not Found)_
```
{
    "error": "Bad Request",
    "message": "error: review not found"
}
```

_Response (500 - Internal Server Error)_
```
{
    "error": "Internal Server Error",
    "message": "<error message>"
}
```
