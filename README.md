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

#### 4.2.2 Warstwa serwera (backend)

#### 4.2.3 Warstwa bazy danych 

### 4.3 Przepływ danych

### 4.4 Bezpieczeństwo 
- **Hashowanie haseł:** Hasła użytkowników są hashowane przy użyciu biblioteki bcrypt przed zapisaniem ich w bazie danych.
- **Autoryzacja JWT:** Uwierzytelnianie użytkowników jest zarządzane za pomocą tokenów JWT. Tokeny są generowane podczas logowania i weryfikowane przy każdym żądaniu do chronionych endpointów.

## 5. Endpointy

### 5.1 Auth routes
- /signup: POST - Zakładanie konta.
- /signin: POST - Logowanie.
- /signout: POST - Wylogowanie.
- /checkAuth: GET - Sprawdzenie czy użytkownik ma wazny token JWT.
### 5.2 User routes
- /current: GET - Dane obecnego użytkownika.
### 5.3 Basket routes
- /add: POST - Dodanie produktu do koszyka.
### 5.4 Product routes
- /: GET - Otrzymanie wszystkich dostępnych produktów.
### 5.5 Order routes
- /create: POST - Stworzenie/finalizacja zamówienia.
- /history: GET - Otrzymanie historii wszystkich zamówień.

## 6. Wireframes

## 7. Runbook

## 8. Przyszłe rozszerzenia

  
