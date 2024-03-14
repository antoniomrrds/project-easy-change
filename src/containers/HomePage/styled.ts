import styled from 'styled-components'

export const Container = styled.div`
  min-width: 400px;
  padding: 20px;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.secondaryColor};
  margin: 10px auto;
  align-items: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: bolder;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: ${({ theme }) => theme.sizes.medium};
`

export const InputLabel = styled.label`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  text-align: center;
  margin-top: 5px;
`
export const List = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const ListItem = styled.li`
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.lightSeaGreen};
  background: ${({ theme }) => theme.colors.dark};
  font-weight: bolder;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background: ${({ theme }) => theme.colors.lightSeaGreen};
    color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0 2px 4px ${({ theme }) => theme.colors.dark};
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.8s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightSeaGreen};
    border: 1px solid ${({ theme }) => theme.colors.lightSeaGreen};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`

export const Padding = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.small};
`

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryColor};
`
