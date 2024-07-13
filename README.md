# Projekt YourMarket v2.0
## 1. Opis Projektu
Aplikacja YourMarket jest narzędziem imitującem działanie sklepu. Aplikacja pozwala użytkownikowi na założenie konta, logowanie, wylogowania, przeglądanie produktów dostępnych na naszej aplikacji, dodawanie produktów do koszyka i tworzenie finalnego zamówienia, dodatkowo jest możliwość wyświetlania historii zamówień. 

## 2. Wymagania 
- **Rejestracja użytkownika:** System musi umożliwić rejestracje użytkownika przez podanie imie, nazwisko, email, nip, postal code, nazwa firmy, hasło i potwierdzenie hasła.
- **Logowanie użytkownika:** System musi umożliwić logowanie użytkownika przez podanie email i hasła.
- **Przeglądanie produktów:** System umożliwia przeglądanie obecnie dostępnie produktów i dodanie ich do koszyka.
- **Dodawanie produktów do koszyka:** System umożliwia dodawanie produktu wybranego z listu do koszyka.
- **Tworzenie zamówienia:** System umożliwia tworzenie zamówienia z wybranych produktów w koszyku.
- **Wyświetlanie historii zamówień:** System umożliwia wyświetlanie historii zamówień wraz z numerem zamówienia, datą i ceną za zamówienie.
- **Wylogowanie:**: System umożliwia wylogowanie użytkownikowi z aplikacji.

## 3. Funkcjonalności 
- **Założenie konta:** Użytkownicy mogą zarejestrować się do aplikacji, co w późniejszym etapie pozwala na dostęp do innych funkcjonalności.
- **Przeszukiwanie dostępnych artykułów:** Użytkownik ma możliwość zobaczyć jakie są obecnie możliwe artykuły do zakupu.
- **Dodanie artykułu do koszyka:** Użytkownik może dodać dostępny artykuł do koszyka.
- **Finalizacja zamówienia:** Użytkownik po dodaniu artykułów do koszyka ma możliwość złożyć zamówienie.
- **Wyświetlenie informacji o danych użytkownika:** Użytkownik może wyświetlić informacje dot. swojego konta.
- **Wyświetlenie historii zamówień:** Użytkownik może wyświetlić historię dot. swoich zamówień.

## 4. Architektura systemu

### 4.1 Opis ogólny
Aplikacja YourMarket jest zbudowana w oparciu o stos technologiczny MEAN (MongoDB, Express.js, Angular, Node.js). Jest to aplikacja internetowa z backendem uruchomionym na Node.js 
i Express.js oraz frontendem uruchomionym na Angular. Dane przechowywane są w bazie danych MongoDB.

### 4.2 Architektura 
Warstwa klienta jest odpowiedzialna za interfejs użytkownika i logikę aplikacji działającą po stronie przeglądarki. Została zbudowana z użyciem Angular i komunikuje się z backendem za pośrednictwem API RESTful.

#### 4.2.1 Warstwa klienta (frontend)
Warstwa klienta jest odpowiedzialna za interfejs użytkownika i logikę aplikacji działającą po stronie przeglądarki. Została zbudowana z użyciem Angulara i komunikuje się z backendem za pośrednictwem API RESTful.

#### 4.2.2 Warstwa serwera (backend)
Warstwa serwera zarządza logiką biznesową aplikacji i komunikuje się z bazą danych MongoDB. Została zbudowana z użyciem Node.js i Express.js.

#### 4.2.3 Warstwa bazy danych 
Warstwa bazy danych jest odpowiedzialna za przechowywanie danych aplikacji. Dane są przechowywane w dokumentach w bazie danych MongoDB

### 4.3 Przepływ danych
1. Rejestracja i logowanie użytkownika:
- Użytkownik wprowadza swoje dane w formularzu na stronie frontendowej.
- Dane są wysyłane do serwera za pomocą żądania HTTP POST.
- Serwer weryfikuje dane, hashuje hasło i zapisuje nowego użytkownika w bazie danych.
- Podczas logowania serwer generuje token JWT, który jest zwracany do klienta i przechowywany w ciasteczkach.

2. Przeglądanie dostępnych produktów:
- Użytkownik może przeglądać dostępne produkty.
- Użytkownik może dodać produkt do koszyka.

3. Sprawdzanie koszyka i finalizowanie zamówienia.
- Użytkownik może zobaczyć obecnie jakie produkty dodał do koszyka.
- Użytkownik może zawartość koszyka sfinalizować jako zamówienie

4. Sprawdzenie informacji o swoim koncie.
- Użytkownik może podejrzeć informacje o swoim koncie.

5. Sprawdzanie historii zamówień.
- Użytkownik może podejrzeć historię swoich zamówień. 

### 4.4 Bezpieczeństwo 
- **Hashowanie haseł:** Hasła użytkowników są hashowane przy użyciu biblioteki bcrypt przed zapisaniem ich w bazie danych.
- **Autoryzacja JWT:** Uwierzytelnianie użytkowników jest zarządzane za pomocą tokenów JWT. Tokeny są generowane podczas logowania i weryfikowane przy każdym żądaniu do chronionych endpointów.

## 5. Endpointy

### 5.1 Auth routes `api/auth`
- `/signup`: POST - Zakładanie konta.
- `/signin`: POST - Logowanie.
- `/signout`: POST - Wylogowanie.
- `/checkAuth`: GET - Sprawdzenie czy użytkownik ma wazny token JWT.
### 5.2 User routes `api/user`
- `/current`: GET - Dane obecnego użytkownika.
### 5.3 Basket routes `api/basket`
- `/add`: POST - Dodanie produktu do koszyka.
### 5.4 Product routes `api/products`
- `/`: GET - Otrzymanie wszystkich dostępnych produktów.
### 5.5 Order routes `api/order`
- `/create`: POST - Stworzenie/finalizacja zamówienia.
- `/history`: GET - Otrzymanie historii wszystkich zamówień.

## 6. Wireframes
### 6.1 Home page
![Zrzut ekranu 2024-07-12 185036](https://github.com/user-attachments/assets/7a7755a1-6de0-4a8f-82f4-82b0de903373)
![Zrzut ekranu 2024-07-12 185049](https://github.com/user-attachments/assets/3bb3e674-e42d-430d-815b-ed153ac7810c)
![Zrzut ekranu 2024-07-12 185132](https://github.com/user-attachments/assets/372435e8-a763-4208-b138-9cfc35cc9682)

### 6.2 Sign up page
![Zrzut ekranu 2024-07-12 185101](https://github.com/user-attachments/assets/a2353860-c45b-43d4-9850-ef72bf8cb2a2)

### 6.3 Sign in page
![Zrzut ekranu 2024-07-12 185108](https://github.com/user-attachments/assets/2afd03c5-c90f-441d-88c1-cfd7402574e4)

### 6.4 My basket page
![Zrzut ekranu 2024-07-12 185617](https://github.com/user-attachments/assets/dd7307cc-3753-44bc-b9a3-627bb88783c6)

### 6.5 My account page
![Zrzut ekranu 2024-07-12 185154](https://github.com/user-attachments/assets/ca525cf2-c8d5-4ce9-8493-a7ecc3af83ad)

### 6.6 My orders history page
![Zrzut ekranu 2024-07-12 185144](https://github.com/user-attachments/assets/873d9d95-cac5-49ee-898d-f66516203135)

### 6.7 Search products page
![Zrzut ekranu 2024-07-12 185213](https://github.com/user-attachments/assets/27bb388f-2aae-42a4-ac57-f44bfd977edb)
