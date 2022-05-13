/* eslint-disable */
export type Article = {
  id: string
  title: string
  description: string
  content: string

  category?: {
    id: string
    name: string
    articles?: string[] | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  } | undefined

  image: {
    id: string
    name: string
    alternativeText?: string | undefined
    caption?: string | undefined
    width?: number | undefined
    height?: number | undefined
    hash: string
    ext?: string | undefined
    mime: string
    size: number
    url: string
    previewUrl?: string | undefined
    provider: string
    related?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  }

  author?: {
    id: string
    name?: string | undefined
    picture?: string | undefined
    articles?: string[] | undefined
    email?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  } | undefined

  published_at?: string | undefined
}

export type NewArticle = {
  title: string
  description: string
  content: string
  category?: string | undefined
  author?: string | undefined
  published_at?: string | undefined
  created_by?: string | undefined
  updated_by?: string | undefined
}

export type Category = {
  id: string
  name: string
  articles?: {
    id: string
    title: string
    description: string
    content: string
    category?: string | undefined
    image: string
    author?: string | undefined
    published_at?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  }[] | undefined
}

export type NewCategory = {
  name: string
  articles?: string[] | undefined
  created_by?: string | undefined
  updated_by?: string | undefined
}

export type Global = {
  id: string

  favicon?: {
    id: string
    name: string
    alternativeText?: string | undefined
    caption?: string | undefined
    width?: number | undefined
    height?: number | undefined
    hash: string
    ext?: string | undefined
    mime: string
    size: number
    url: string
    previewUrl?: string | undefined
    provider: string
    related?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  } | undefined

  siteName: string

  defaultSeo: {
    id: string
    metaTitle: string
    metaDescription: string

    shareImage?: {
      id: string
      name: string
      alternativeText?: string | undefined
      caption?: string | undefined
      width?: number | undefined
      height?: number | undefined
      hash: string
      ext?: string | undefined
      mime: string
      size: number
      url: string
      previewUrl?: string | undefined
      provider: string
      related?: string | undefined
      created_by?: string | undefined
      updated_by?: string | undefined
    } | undefined
  }
}

export type NewGlobal = {
  siteName: string

  defaultSeo: {
    id: string
    metaTitle: string
    metaDescription: string

    shareImage?: {
      id: string
      name: string
      alternativeText?: string | undefined
      caption?: string | undefined
      width?: number | undefined
      height?: number | undefined
      hash: string
      ext?: string | undefined
      mime: string
      size: number
      url: string
      previewUrl?: string | undefined
      provider: string
      related?: string | undefined
      created_by?: string | undefined
      updated_by?: string | undefined
    } | undefined
  }

  created_by?: string | undefined
  updated_by?: string | undefined
}

export type Homepage = {
  id: string

  seo?: {
    id: string
    metaTitle: string
    metaDescription: string

    shareImage?: {
      id: string
      name: string
      alternativeText?: string | undefined
      caption?: string | undefined
      width?: number | undefined
      height?: number | undefined
      hash: string
      ext?: string | undefined
      mime: string
      size: number
      url: string
      previewUrl?: string | undefined
      provider: string
      related?: string | undefined
      created_by?: string | undefined
      updated_by?: string | undefined
    } | undefined
  } | undefined

  hero: {
    id: string
    title: string
  }
}

export type NewHomepage = {
  seo?: {
    id: string
    metaTitle: string
    metaDescription: string

    shareImage?: {
      id: string
      name: string
      alternativeText?: string | undefined
      caption?: string | undefined
      width?: number | undefined
      height?: number | undefined
      hash: string
      ext?: string | undefined
      mime: string
      size: number
      url: string
      previewUrl?: string | undefined
      provider: string
      related?: string | undefined
      created_by?: string | undefined
      updated_by?: string | undefined
    } | undefined
  } | undefined

  hero: {
    id: string
    title: string
  }

  created_by?: string | undefined
  updated_by?: string | undefined
}

export type Writer = {
  id: string
  name?: string | undefined

  picture?: {
    id: string
    name: string
    alternativeText?: string | undefined
    caption?: string | undefined
    width?: number | undefined
    height?: number | undefined
    hash: string
    ext?: string | undefined
    mime: string
    size: number
    url: string
    previewUrl?: string | undefined
    provider: string
    related?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  } | undefined

  articles?: {
    id: string
    title: string
    description: string
    content: string
    category?: string | undefined
    image: string
    author?: string | undefined
    published_at?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  }[] | undefined
  email?: string | undefined
}

export type NewWriter = {
  name?: string | undefined
  articles?: string[] | undefined
  email?: string | undefined
  created_by?: string | undefined
  updated_by?: string | undefined
}

export type UsersPermissionsRole = {
  id: string
  name: string
  description?: string | undefined
  type?: string | undefined
  permissions?: {
    id: string
    type: string
    controller: string
    action: string
    enabled: boolean
    policy?: string | undefined
    role?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  }[] | undefined
  users?: {
    id: string
    username: string
    email: string
    provider?: string | undefined
    password?: string | undefined
    resetPasswordToken?: string | undefined
    confirmationToken?: string | undefined
    confirmed?: boolean | undefined
    blocked?: boolean | undefined
    role?: string | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  }[] | undefined
}

export type NewUsersPermissionsRole = {
  name: string
  description?: string | undefined
  type?: string | undefined
  permissions?: string[] | undefined
  users?: string[] | undefined
  created_by?: string | undefined
  updated_by?: string | undefined
}

export type UsersPermissionsUser = {
  id: string
  username: string
  email: string
  provider?: string | undefined
  confirmed?: boolean | undefined
  blocked?: boolean | undefined

  role?: {
    id: string
    name: string
    description?: string | undefined
    type?: string | undefined
    permissions?: string[] | undefined
    users?: string[] | undefined
    created_by?: string | undefined
    updated_by?: string | undefined
  } | undefined
}

export type NewUsersPermissionsUser = {
  username: string
  email: string
  provider?: string | undefined
  password?: string | undefined
  resetPasswordToken?: string | undefined
  confirmationToken?: string | undefined
  confirmed?: boolean | undefined
  blocked?: boolean | undefined
  role?: string | undefined
  created_by?: string | undefined
  updated_by?: string | undefined
}

export type Error = {
  code: number
  message: string
}
