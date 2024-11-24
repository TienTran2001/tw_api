```typescript
enum UserVerifyStatus {
  Unverified, // chua xac thuc email
  Verified, // da xac thuc email
  Banned // bi khoa
}

interface User {
  _id: ObjectId
  name: string
  email: string
  date_of_birth: string
  password: string
  created_at: Date
  updated_at: Date
  email_verified_token: string // jwt hoac '' neu da xac thuc bang email
  forgot_password_token: string // jwt hoac '' neu da xac thuc bang email
  verify: UserVerifyStatus

  bio: string // optional
  location: string // optional
  website: string // optional
  username: string // optional
  avatar: string // optional
  cover_photo: string // optional
}
```

```typescript
interface RefreshToken {
  _id: ObjectId
  token: string
  created_at: Date
  user_id: ObjectId
}
```

```typescript
interface Follower {
  _id: ObjectId
  user_id: ObjectId
  followed_user_id: ObjectId
  created_at: Date
}
```

```typescript
interface Tweet {
  _id: ObjectId
  user_id: ObjectId
  type: TweetType
  audience: TweetAudience
  content: string
  parent_id: null | ObjectId // chi null khi tweet goc
  hashtags: ObjectId[] // mang cac hashtag id
  mentions: ObjectId[] // mang cac user id
  medias: Media[]
  guest_views: number
  user_views: number
  created_at: Date
  updated_at: Date
}
```

```ts
interface Media {
  url: string
  type: MediaType // video, image
}

enum MediaType {
  Image,
  Video
}

enum TweetAudience {
  Everyone,
  TwitterCircle
}

enum TweetType {
  Tweet,
  Retweet,
  Comment,
  QuoteTweet
}
```

```typescript
interface Bookmark {
  _id: ObjectId
  user_id: ObjectId
  tweet_id: ObjectId
  created_at: Date
}
```

```typescript
interface Like {
  _id: ObjectId
  user_id: ObjectId
  tweet_id: ObjectId
  created_at: Date
}
```

```typescript
interface Hashtag {
  _id: ObjectId
  name: string
  created_at: Date
}
```
