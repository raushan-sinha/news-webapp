export const NEWSSERVICEAPI = async (newsAPI) => {
    const response = await fetch(newsAPI);

    if (!response.ok) throw new Error('News API isn`t fetching correctly.');
    const data = await response.json();
    console.log('News Data', data);

    return data;
}