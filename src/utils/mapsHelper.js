export function extractPlacesAndLinks(llmAnswer) {
  const lines = llmAnswer.split('\n');
  const places = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    const cleaned = line.replace(/^\d+[\.\)]\s*/, '');

    const maps_link = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleaned)}`;
    places.push({ name: cleaned, maps_link });
  }

  return places;
}
