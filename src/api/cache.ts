import { ClearCacheResponse, GitInfo, createVcsUrl } from "../types";
import { client } from "../client";

/**
 * Clear project cache
 *
 * @see https://circleci.com/docs/api/v1-reference/#clear-cache
 * @example DELETE : https://circleci.com/api/v1.1/project/:vcs-type/:username/:project/build-cache
 *
 * @param token CircleCI API token
 * @param vcs Git info for project
 * @returns status message of request
 */
export function clearCache(
  token: string,
  vcs: GitInfo
): Promise<ClearCacheResponse> {
  const url = `${createVcsUrl(vcs)}/build-cache`;
  return client(token).delete(url);
}
