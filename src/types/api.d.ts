/**
 * CircleCI API Definitions
 * Jordon de Hoog, 2018
 *
 * API: https://circleci.com/api/v1.1/
 *
 * API reference:
 * @see https://circleci.com/docs/api/v1-reference/
 */

/**
 * Authenticated user info
 *
 * GET - https://circleci.com/api/v1.1/me
 * @see https://circleci.com/docs/api/v1-reference/#getting-started
 */
export type MeResponse = Me;

/**
 * Projects
 *
 * All followed projects:
 * GET - https://circleci.com/api/v1.1/projects
 * @see https://circleci.com/docs/api/v1-reference/#projects
 */
export type AllProjectsResponse = Project[];

/**
 * Follow Project
 *
 * POST - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/follow
 * @see https://circleci.com/docs/api/v1-reference/#follow-project
 */
export type FollowProjectResponse = FollowNewResult;

/**
 * Builds
 *
 * Recent builds for all projects
 * GET - https://circleci.com/api/v1.1/recent-builds?limit=20&offset=5
 * @see https://circleci.com/docs/api/v1-reference/#recent-builds
 *
 * For Single project:
 * GET - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project?&limit=20&offset=5&filter=completed
 * @see https://circleci.com/docs/api/v1-reference/#recent-builds-project
 *
 * For single branch on project:
 * GET - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/tree/:branch
 * @see https://circleci.com/docs/api/v1-reference/#recent-builds-project-branch
 */
export type BuildSummaryResponse = BuildSummary[];

/**
 * Build
 *
 * Details for build
 * GET - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num
 * @see https://circleci.com/docs/api/v1-reference/#build
 */
export type FetchBuildResponse = BuildWithSteps;

/**
 * Build Artifacts
 *
 * For build:
 * GET - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/artifacts
 * @see https://circleci.com/docs/api/v1-reference/#build-artifacts
 *
 * Latest build:
 *
 * GET - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/latest/artifacts?branch=:branch&filter=:filter
 * @see https://circleci.com/docs/api/v1-reference/#build-artifacts-latest
 */
export type ArtifactResponse = Artifact[];

/**
 * Build Actions
 */

/**
 * Retry build
 * POST - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/retry
 * @see https://circleci.com/docs/api/v1-reference/#retry-build
 */
export type RetryBuildResponse = BuildSummary;

/**
 * Cancel build
 * POST - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/:build_num/cancel
 * @see https://circleci.com/docs/api/v1-reference/#cancel-build
 */
export type CancelBuildResponse = BuildSummary;

/**
 * Trigger new build
 * POST - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project
 * @see https://circleci.com/docs/api/v1-reference/#new-build
 *
 * Triger new build on specific branch
 * POST - https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/tree/:branch
 * @see https://circleci.com/docs/api/v1-reference/#new-build-branch
 */
export type TriggerBuildResponse = Build;

export interface Me {
  enrolled_betas?: string[];
  in_beta_program?: boolean;
  selected_email?: string;
  avatar_url?: string;
  trial_end?: string;
  basic_email_prefs?: string;
  sign_in_count?: number;
  github_oauth_scopes?: string[];
  analytics_id?: string;
  name?: string;
  gravatar_id?: string;
  first_vcs_authorized_client_id?: string;
  days_left_in_trial?: number;
  parallelism?: number;
  student?: boolean;
  bitbucket_authorized?: boolean;
  github_id?: number;
  bitbucket?: string;
  dev_admin?: boolean;
  all_emails?: string[];
  created_at?: string;
  plan?: string;
  heroku_api_key?: string;
  identities?: Identity;
  projects?: ProjectsList;
  login?: string;
  organization_prefs?: Organization;
  containers?: number;
  pusher_id?: string;
  num_projects_followed?: number;
}

export interface Identity {
  [vcs: string]: IdentityDetails;
}

export interface IdentityDetails {
  avatar_url?: string;
  external_id?: number;
  id?: number;
  name?: string;
  user?: boolean;
  domain?: string;
  type?: string;
  authorized?: boolean;
  provider_id?: string;
  login?: string;
}

export interface ProjectsList {
  [project: string]: ProjectSummary;
}

export interface ProjectSummary {
  on_dashboard?: boolean;
  emails?: string;
}

export interface Organization {
  [vcs: string]: {
    [org: string]: {
      email: string;
    };
  };
}

export interface User {
  is_user?: boolean;
  login?: string;
  avatar_url?: string;
  name?: string;
  vcs_type?: string;
  id?: number;
}

export interface Project {
  irc_server?: string;
  ssh_keys?: string[];
  branches: Branch;
  irc_keyword?: string;
  oss?: boolean;
  reponame?: string;
  dependencies?: string;
  slack_webhook_url?: string;
  irc_channel?: string;
  parallel?: number;
  campfire_subdomain?: string;
  slack_integration_access_token?: string;
  username?: string;
  slack_integration_team?: string;
  slack_integration_channel?: string;
  hipchat_notify?: string;
  heroku_deploy_user?: string;
  irc_username?: string;
  slack_notify_prefs?: string;
  scopes?: string[];
  campfire_room?: string;
  hipchat_api_token?: string;
  campfire_token?: string;
  slack_subdomain?: string;
  has_usable_key?: boolean;
  setup?: string;
  vcs_type?: string;
  feature_flags?: FeatureFlags;
  irc_password?: string;
  compile?: string;
  slack_integration_notify_prefs?: string;
  slack_integration_webhook_url?: string;
  irc_notify_prefs?: string;
  slack_integration_team_id?: string;
  extra?: string;
  jira?: any;
  slack_integration_channel_id?: string | number;
  language?: string;
  hipchat_room?: string;
  flowdock_api_token?: string;
  slack_channel_override?: string;
  vcs_url?: string;
  following?: boolean;
  default_branch?: string;
  slack_api_token?: string;
  test?: string;
}

export interface Branch {
  [name: string]: BranchDetails;
}

export interface BranchDetails {
  pusher_logins?: string[];
  running_builds: BuildSummary[];
  recent_builds: BuildSummary[];
  last_non_success?: BuildSummary;
}

export interface BuildSummary {
  outcome?: string;
  status?: string;
  build_num?: number;
  vcs_revision?: string;
  pushed_at?: string;
  is_workflow_job?: boolean;
  added_at?: string;
}

export interface FeatureFlags {
  "trusty-beta"?: boolean;
  osx?: boolean;
  "set-github-status"?: boolean;
  "build-prs-only"?: boolean;
  "forks-receive-secret-env-vars"?: boolean;
  "build-fork-prs"?: boolean;
  "autocancel-builds"?: boolean;
  oss?: boolean;
}

export interface PreviousBuild {
  build_num?: number;
  status?: string;
  build_time_millis?: number;
}

export interface BuildSummary {
  body?: string;
  branch?: string;
  build_num?: number;
  build_time_millis?: number;
  build_url?: string;
  canceled?: boolean;
  committer_email?: string;
  committer_name?: string;
  dont_build?: boolean;
  lifecycle?: string;
  outcome?: string;
  previous?: PreviousBuild;
  queued_at?: string;
  reponame?: string;
  retry_of?: number;
  start_time?: string;
  status?: string;
  stop_time?: string;
  subject?: string;
  username?: string;
  vcs_revision?: string;
  vcs_url?: string;
  why?: string;
}

export interface Build extends BuildSummary {
  all_commit_details?: PreviousBuild;
  all_commit_details_truncated?: boolean;
  author_date?: string;
  author_email?: string;
  author_name?: string;
  body?: string;
  branch: string;
  build_num?: number;
  build_parameters?: string;
  build_time_millis?: number;
  build_url?: string;
  canceled?: boolean;
  canceler?: string;
  circle_yml?: CircleConfig;
  committer_date?: string;
  committer_email?: string;
  committer_name?: string;
  compare?: string;
  fail_reason?: string;
  failed?: boolean;
  has_artifacts?: boolean;
  infrastructure_fail?: boolean;
  is_first_green_build?: boolean;
  job_name?: string;
  lifecycle?: string;
  messages?: string[];
  no_dependency_cache?: boolean;
  node?: any;
  oss?: boolean;
  outcome?: string;
  parallel?: number;
  picard?: BuildPicard;
  platform?: string;
  previous_successful_build?: PreviousBuild;
  queued_at?: string;
  reponame?: string;
  retries?: number;
  ssh_disabled?: boolean;
  ssh_users?: any[];
  start_time?: string;
  status?: string;
  stop_time?: string;
  subject?: string;
  timedout?: boolean;
  usage_queued_at?: string;
  user?: User;
  username?: string;
  vcs_revision?: string;
  vcs_tag?: string;
  vcs_type?: string;
  vcs_url?: string;
  why?: string;
}

export interface BuildWithSteps extends Build {
  steps: BuildStep[];
}

export interface BuildStep {
  name: string;
  actions: BuildStepAction[];
}

export interface BuildStepAction {
  truncated?: boolean;
  index?: number;
  parallel?: boolean;
  failed?: boolean;
  infrastructure_fail?: boolean;
  name: string;
  bash_command?: string;
  status?: string;
  timedout?: boolean;
  continue?: boolean;
  end_time: string;
  type?: string;
  allocation_id?: string;
  output_url?: string;
  start_time: string;
  background?: boolean;
  exit_code?: number;
  insignificant?: boolean;
  canceled?: boolean;
  step?: number;
  run_time_millis?: number;
  has_output?: boolean;
}

export interface BuildPicard {
  build_agent?: {
    image?: null;
    properties?: {
      build_agent?: string;
      executor?: string;
    };
  };
  resource_class?: {
    cpu?: number;
    ram?: number;
    class?: string;
  };
  executor?: string;
}

export interface CommitDetails {
  committer_date?: string;
  body?: string;
  branch?: string;
  author_date?: string;
  committer_email?: string;
  commit?: string;
  committer_login?: string;
  committer_name?: string;
  subject?: string;
  commit_url?: string;
  author_login?: string;
  author_name?: string;
  author_email?: string;
}

export interface CircleConfig {
  string?: string;
}

export interface FollowNewResult {
  followed?: boolean;
  first_build?: Build;
}

export interface Artifact {
  path: string;
  pretty_path: string;
  node_index: number;
  url: string;
}
