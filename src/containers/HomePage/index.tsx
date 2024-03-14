import {
  Button,
  Container,
  Input,
  InputLabel,
  Result,
  Title,
  List,
  Padding,
  ListItem
} from '@/containers/HomePage/styled'
import { useState } from 'react'

const HomePage = () => {
  const [purchaseAmount, setPurchaseAmount] = useState(0)
  const [amountGiven, setAmountGiven] = useState(0)
  const [change, setChange] = useState(0)
  const [notes, setNotes] = useState({})

  const handleCalculateChange = () => {
    const changeAmount = amountGiven - purchaseAmount
    setChange(changeAmount)
    const calculatedNotes = calculateNotes(changeAmount)
    setNotes(calculatedNotes)
  }

  const calculateNotes = (changeAmount: number) => {
    if (changeAmount <= 0) {
      alert('Valor entregue é insuficiente para pagar a compra.')
    }

    const notes = {
      100: 0,
      10: 0,
      1: 0
    }

    let remainingAmount = changeAmount

    notes[100] = Math.floor(remainingAmount / 100)
    remainingAmount %= 100

    notes[10] = Math.floor(remainingAmount / 10)
    remainingAmount %= 10

    notes[1] = remainingAmount

    return notes
  }

  return (
    <Container>
      <Title>Troco Fácil</Title>
      <InputLabel>
        Valor Cobrado:
        <Input
          type="number"
          value={purchaseAmount}
          onChange={(e) => setPurchaseAmount(parseFloat(e.target.value))}
        />
      </InputLabel>
      <InputLabel>
        Valor Recebido Cliente:
        <Input
          type="number"
          value={amountGiven}
          onChange={(e) => setAmountGiven(parseFloat(e.target.value))}
        />
      </InputLabel>
      <Button onClick={handleCalculateChange}>Troco</Button>
      {change > 0 && (
        <Result>
          <Padding>Troco: R$ {change}</Padding>
          <Padding>Notas totais</Padding>
          <List>
            {Object.entries(notes).map(([note, quantity]) => (
              <ListItem key={note}>
                {Number(quantity)} Nota(s) de R$ {note}
              </ListItem>
            ))}
          </List>
        </Result>
      )}
    </Container>
  )
}
export { HomePage }
