
export const getPetsData = async() => {
  const response = await fetch('../assets/pets.json');
  const petsList = await response.json();
  return petsList;
}