# YourMarket v2.0
Aplikacja jest zaktualizowaną wersją projektu YourMarket. Wersja 2.0 zawiera nową wersje Angulara, tailwind, PrimeNG, dodatkowe makiety, nowe style, nowe komponenty, wykorzystanie dobrych praktyk przy tworzeniu aplikacji w Angularze. 

## Link do wersji 1.0
https://github.com/mikolaj-sujka/YourMarket

## Opis
Aplikacja YourMarket pozwala użytkownikowi na założenie konta, logowanie, wylogowania, przeglądanie produktów dostępnych na naszej aplikacji. Użytkownik ma możliwość filtracji produktów
aby odnaleźć te, które go interesują. Następnie konkretne produkty może dodać do koszyka i zatwierdzić płatność. W końcowej fazie będzie możliwy podgląd historii zamówień dla użytkownika. Dodatkowo użytkownik może w każdym momencie edytować swoje dane, bądź wysłać dane kontaktowe.

Hasło przy rejestracji jest szyfrowane i dodatkowo został dodany AuthGuard (powoduje, że niezalogowany użytkownik nie może przejśc do strony dla zalogowanych).

# Technologie
- Node.js wraz z Express.js, Angular, MongoDb, Tailwind, PrimeNG, ngxs. 

# Instalacja i uruchomienie projektu 
1. Clone projektu, bądź pobranie całości (repozytorium jest publiczne, więc nie powinno być problemu).
2. Zainstalowanie packages w projekcie Angulara przez - npm install.
3. Uruchomienie projektu angulara z poziomu folderu frontendu (YourMarket/src) - ng serve.
4. Uruchomienie backendu node.js (wraz z komunikacja z MongoDb, nie powinno być problemu ponieważ z każdego IP można się połączyć z bazą) 
z poziomu folderu backendu (YourMarket/backend) - npm run start:server