

export default async function loadImage(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("fail to fetch image")
      return;
    }
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error converting image to Base64", error);
    return null;
  }
}
