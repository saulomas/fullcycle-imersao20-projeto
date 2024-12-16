#Eventos

## Vamos receber

RouteCreated
- id
- distance
- distance
- - lat
- - lng

### Efeito colateral (Calcular o frete e retornar o eventos)

FreightCalculated
- route_id
- amount

---
DeliveryStarted
- route_id

### Efeito colateral

DriverMoved
- route_id
- lat
- lng