const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
const APP_ID = process.env.NEXT_PUBLIC_APP_ID ?? "proven_app";

const appHeaders = () => ({ "X-App-Id": APP_ID });

export interface ApiBlog {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  mainImageUrl: string;
  mainImagePublicId: string;
  contentImages: Array<{ url: string; publicId: string; caption: string }>;
  authorId: string;
  author: { id: string; name: string };
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogListResponse {
  data: ApiBlog[];
  total: number;
  page: number;
  limit: number;
}

export const getBlogs = (page = 1, limit = 10): Promise<BlogListResponse> =>
  fetch(`${API_BASE}/blogs?page=${page}&limit=${limit}`, {
    headers: appHeaders(),
  })
    .then((r) => r.json())
    .then((json) => json.data);

export const getBlogBySlug = (slug: string): Promise<ApiBlog> =>
  fetch(`${API_BASE}/blogs/slug/${slug}`, { headers: appHeaders() })
    .then((r) => r.json())
    .then((json) => json.data);

export const getBlogById = (id: string): Promise<ApiBlog> =>
  fetch(`${API_BASE}/blogs/${id}`, { headers: appHeaders() })
    .then((r) => r.json())
    .then((json) => json.data);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const estimateReadTime = (html: string) => {
  const wordCount = html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(wordCount / 200))} min read`;
};
