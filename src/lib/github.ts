import type { GitHubUser, GitHubRepo } from "@/types";

const GITHUB_API = "https://api.github.com";

export async function getGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${GITHUB_API}/users/${username}`, {
      next: { revalidate: 3600 }, // Cache 1 hour
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getGitHubRepos(
  username: string,
  limit = 6
): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=${limit}&type=public`,
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}
