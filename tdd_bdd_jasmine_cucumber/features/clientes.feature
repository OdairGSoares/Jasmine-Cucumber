Feature: Clients
    Scenario: "List o clients"
        Given I'm have "10" clientes in my database
        When I access the home webpage
        Then see the list o "10" itens