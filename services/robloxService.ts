/**
 * Extracts the Place ID from a Roblox game URL.
 * @param url The full Roblox game URL.
 * @returns The extracted Place ID as a string, or null if not found.
 */
export const extractPlaceId = (url: string): string | null => {
  try {
    const match = url.match(/\/games\/(\d+)\//);
    return match ? match[1] : null;
  } catch (error) {
    console.error(`Error extracting Place ID from ${url}:`, error);
    return null;
  }
};

/**
 * Fetches the updated game icon thumbnail from the Roblox API via a CORS proxy.
 * @param placeId The Place ID of the Roblox game.
 * @returns A promise that resolves to the new thumbnail URL, or null on failure.
 */
export const getRobloxThumbnail = async (placeId: string): Promise<string | null> => {
  // The Roblox API has strict CORS policies, preventing direct client-side requests.
  // We use a CORS proxy to bypass this limitation.
  const robloxApiUrl = `https://thumbnails.roblox.com/v1/places/gameicons?placeIds=${placeId}&returnPolicy=PlaceHolder&size=512x512&format=Png&isCircular=false`;

  // Using a CORS proxy to make the request.
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(robloxApiUrl)}`;

  try {
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data.data && data.data.length > 0) {
      const thumbnailData = data.data[0];
      // Only use the thumbnail if the API has finished generating it.
      if (thumbnailData.state === 'Completed' && thumbnailData.imageUrl) {
        return thumbnailData.imageUrl;
      }
      console.warn(`Thumbnail for placeId ${placeId} is not available. State: ${thumbnailData.state}`);
      return null;
    }
    return null;
  } catch (error) {
    // This will catch network errors or problems with the proxy.
    console.error(`Error fetching thumbnail for placeId ${placeId} via proxy:`, error);
    return null;
  }
};