import { Gender, PetDto } from '../../se../../services/api/pets/contracts'

const PETS: PetDto[] = [
  {
    id: '13ef10a9-3279-4096-a48e-13acf44724a4',
    name: 'Grumpy',
    description:
      'Tardar Sauce , nicknamed Grumpy Cat, was an American Internet celebrity cat. She was known for her permanently "grumpy" facial appearance, which was caused by an underbite and feline dwarfism.',
    gender: Gender.Male,
    dateOfBirthTimestamp: 1560204000000,
    imageURL:
      'https://ocdn.eu/pulscms-transforms/1/rkQk9kuTURBXy85OTdlNzg5MS1jNmQ1LTRjOWEtODgwZi1iNzcxYmU4ZjY0NWYuanBlZ5OVAwxWzQRjzQJ4kwXNAxTNAbyTCaZmOGNiOWUGgaEwBQ/grumpy-cat.webp',
  },
  {
    id: 'ca526b97-5e43-4b4b-b751-38839d5fc2b2',
    name: 'Doge',
    description:
      'An Internet meme that became popular in 2013. The meme typically consists of a picture of a Shiba Inu dog accompanied by multicolored text in Comic Sans font in the foreground.',
    gender: Gender.Undefined,
    dateOfBirthTimestamp: 1580204000000,
    imageURL:
      'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  },
]

export default PETS
