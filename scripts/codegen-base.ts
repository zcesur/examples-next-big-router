import { publicProcedure, router } from '~/server/trpc';
import { z } from 'zod';

export const Schema = z.object({
  zen: z.string(),
  hook_id: z.number(),
  hook: z.object({
    type: z.string(),
    id: z.number(),
    name: z.string(),
    active: z.boolean(),
    events: z.array(z.string()),
    config: z.object({
      content_type: z.string(),
      url: z.string(),
      insecure_ssl: z.string(),
    }),
    updated_at: z.string(),
    created_at: z.string(),
    url: z.string(),
    test_url: z.string(),
    ping_url: z.string(),
    last_response: z.object({
      code: z.null(),
      status: z.string(),
      message: z.null(),
    }),
  }),
  repository: z.object({
    id: z.number(),
    node_id: z.string(),
    name: z.string(),
    full_name: z.string(),
    private: z.boolean(),
    owner: z.object({
      login: z.string(),
      id: z.number(),
      node_id: z.string(),
      avatar_url: z.string(),
      gravatar_id: z.string(),
      url: z.string(),
      html_url: z.string(),
      followers_url: z.string(),
      following_url: z.string(),
      gists_url: z.string(),
      starred_url: z.string(),
      subscriptions_url: z.string(),
      organizations_url: z.string(),
      repos_url: z.string(),
      events_url: z.string(),
      received_events_url: z.string(),
      type: z.string(),
      site_admin: z.boolean(),
    }),
    html_url: z.string(),
    description: z.null(),
    fork: z.boolean(),
    url: z.string(),
    forks_url: z.string(),
    keys_url: z.string(),
    collaborators_url: z.string(),
    teams_url: z.string(),
    hooks_url: z.string(),
    issue_events_url: z.string(),
    events_url: z.string(),
    assignees_url: z.string(),
    branches_url: z.string(),
    tags_url: z.string(),
    blobs_url: z.string(),
    git_tags_url: z.string(),
    git_refs_url: z.string(),
    trees_url: z.string(),
    statuses_url: z.string(),
    languages_url: z.string(),
    stargazers_url: z.string(),
    contributors_url: z.string(),
    subscribers_url: z.string(),
    subscription_url: z.string(),
    commits_url: z.string(),
    git_commits_url: z.string(),
    comments_url: z.string(),
    issue_comment_url: z.string(),
    contents_url: z.string(),
    compare_url: z.string(),
    merges_url: z.string(),
    archive_url: z.string(),
    downloads_url: z.string(),
    issues_url: z.string(),
    pulls_url: z.string(),
    milestones_url: z.string(),
    notifications_url: z.string(),
    labels_url: z.string(),
    releases_url: z.string(),
    deployments_url: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    pushed_at: z.string(),
    git_url: z.string(),
    ssh_url: z.string(),
    clone_url: z.string(),
    svn_url: z.string(),
    homepage: z.null(),
    size: z.number(),
    stargazers_count: z.number(),
    watchers_count: z.number(),
    language: z.string(),
    has_issues: z.boolean(),
    has_projects: z.boolean(),
    has_downloads: z.boolean(),
    has_wiki: z.boolean(),
    has_pages: z.boolean(),
    forks_count: z.number(),
    mirror_url: z.null(),
    archived: z.boolean(),
    disabled: z.boolean(),
    open_issues_count: z.number(),
    license: z.null(),
    forks: z.number(),
    open_issues: z.number(),
    watchers: z.number(),
    default_branch: z.string(),
  }),
  sender: z.object({
    login: z.string(),
    id: z.number(),
    node_id: z.string(),
    avatar_url: z.string(),
    gravatar_id: z.string(),
    url: z.string(),
    html_url: z.string(),
    followers_url: z.string(),
    following_url: z.string(),
    gists_url: z.string(),
    starred_url: z.string(),
    subscriptions_url: z.string(),
    organizations_url: z.string(),
    repos_url: z.string(),
    events_url: z.string(),
    received_events_url: z.string(),
    type: z.string(),
    site_admin: z.boolean(),
  }),
});

export const __ROUTER__NAME__ = router({
  greeting: publicProcedure
    .input(Schema)
    .query(({ input }) => `hello ${input.sender.login}`),
});
