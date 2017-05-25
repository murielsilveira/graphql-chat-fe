const idGenerator = function*() {
  let id = 1
  while (true) yield id++
}()

export const newId = () => idGenerator.next().value

export const currentUser = {
  id: newId(),
  name: 'John Doe',
}

export const stubMessages = [
  {
    id: newId(),
    text: 'E aí, beleza?',
    user: currentUser,
  },
  {
    id: newId(),
    text: 'Hey Yo',
    user: {
      id: newId(),
      name: 'Mary Jane',
    }
  },
]
