export function extractPlacesAndLinks(llmAnswer) {
  const found = [];
  const sentences = llmAnswer.split(/[.,;]/);

  sentences.forEach((sentence) => {
    const regex = /(?:coba|di|tempat|makan|restoran)?\\s*(Bakso|Mie|Soto|Ayam|Warung|Restoran|Cafe)?\\s?([A-Z][a-z]+(?:\\s[A-Z][a-z]+)*)(?:\\sdi\\s([A-Z][a-z]+))?/g;
    let match;

    while ((match = regex.exec(sentence))) {
      const name = match[0].trim();
      const query = encodeURIComponent(name + ' Bandung');
      const link = `https://www.google.com/maps/search/?api=1&query=${query}`;

      found.push({ name, maps_link: link });
    }
  });

  return found;
}
