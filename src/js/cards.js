// create and render cards
const cars = [
    {
        type: 'car',
        name: 'Toyota Crown 2023',
        price: '39900',
        loan: '650',
        img: 'assets/images/cars/img-01.jpg',
    },
    {
        type: 'electro',
        name: 'Prius Prime 2023',
        price: '33445',
        loan: '450',
        img: 'assets/images/cars/img-02.jpg',
    },
    {
        type: 'electro',
        name: 'Toyota Prius 2023',
        price: '27450',
        loan: '400',
        img: 'assets/images/cars/img-03.jpg',
    },
    {
        type: 'suv',
        name: 'Hyundai Kona 2023',
        price: '33190',
        loan: '510',
        img: 'assets/images/cars/img-04.jpg',
    },
    {
        type: 'suv',
        name: 'Ford Explorer 2023',
        price: '59695',
        loan: '1,013',
        img: 'assets/images/cars/img-05.jpg',
    },
    {
        type: 'suv',
        name: 'Santa Fe 2023',
        price: '28750',
        loan: '739',
        img: 'assets/images/cars/img-06.jpg',
    },
    {
        type: 'suv',
        name: 'KIA Niro 2023',
        price: '33600',
        loan: '554',
        img: 'assets/images/cars/img-07.jpg',
    },
    {
        type: 'truck',
        name: 'Chevrolet Silverado',
        price: '62260',
        loan: '1,032',
        img: 'assets/images/cars/img-08.jpg',
    },
    {
        type: 'suv',
        name: 'Honda CR-V 2023',
        price: '35650',
        loan: '591',
        img: 'assets/images/cars/img-09.jpg',
    },
    {
        type: 'suv',
        name: 'Hyundai Tucson',
        price: '31885',
        loan: '528',
        img: 'assets/images/cars/img-10.jpg',
    },
    {
        type: 'suv',
        name: 'Chevrolet Equinox',
        price: '28430',
        loan: '471',
        img: 'assets/images/cars/img-11.jpg',
    },
    {
        type: 'truck',
        name: 'Jeep Wrangler 2023',
        price: '60000',
        loan: '997',
        img: 'assets/images/cars/img-12.jpg',
    },

];

const cardTemplate = document.querySelector('#card').content;
const container = document.querySelector('.tabs__content');

const createCard = (car) => {
    const { type, name, price, loan, img } = car;
    const card = cardTemplate.cloneNode(true);

    const cardTypes = card.querySelectorAll('[data-card-type]');
    const cardTitle = card.querySelector('.card__title');
    const cardPrice = card.querySelector('.card__price');
    const cardLoan = card.querySelector('.card__loan');
    const cardImg = card.querySelector('.card__img');

    cardTypes.forEach((item) => {
        item.dataset.cardType = type;
    })
    cardTitle.textContent = name;
    cardPrice.textContent = `starting from $ ${price}`;
    cardLoan.textContent = `$ ${loan}/mo`;
    cardImg.src = img;

    return card;
};

const renderCards = (items, parent) => {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
        const itemCard = createCard(item);
        fragment.append(itemCard);
    });
    parent.append(fragment);
};

renderCards(cars, container);


// filter cards by cars type
const tabItems = document.querySelectorAll('.tabs__btn--item');
const cards = document.querySelectorAll('.tabs__content-card');
const allButton = document.querySelector('[data-button-type=all');

const showCard = (evt) => {
    const tabTarget = evt.currentTarget;
    const buttonType = tabTarget.dataset.buttonType;

    tabItems.forEach((item) => {
        item.classList.remove('link-active');
    });
    tabTarget.classList.add('link-active');

    cards.forEach((item) => {
        item.classList.remove('tabs__content-card--active');
    });

    const filteredCards = document.querySelectorAll(`[data-card-type=${buttonType}]`);
    filteredCards.forEach((item) => {
        item.classList.add('tabs__content-card--active');
    });

    allButton.addEventListener('click', () => {
        cards.forEach((item) => {
            item.classList.add('tabs__content-card--active');
        });
    });
}

tabItems.forEach((item) => {
    item.addEventListener('click', showCard);
});


