import './OtherButtons.css'

function OtherButtons() {
    return (
        <div className="other-but-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15H4C3.73478 15 3.48043 14.8946 3.29289 14.7071C3.10536 14.5196 3 14.2652 3 14V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H10M7 19H10M17 8V8.01M13 5C13 4.73478 13.1054 4.48043 13.2929 4.29289C13.4804 4.10536 13.7348 4 14 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H14C13.7348 20 13.4804 19.8946 13.2929 19.7071C13.1054 19.5196 13 19.2652 13 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 15V19M16 16C16 16.2652 16.1054 16.5196 16.2929 16.7071C16.4804 16.8946 16.7348 17 17 17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16C18 15.7348 17.8946 15.4804 17.7071 15.2929C17.5196 15.1054 17.2652 15 17 15C16.7348 15 16.4804 15.1054 16.2929 15.2929C16.1054 15.4804 16 15.7348 16 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="smaller-one">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.521 5.904 18.713 5.712C18.905 5.52 19.0007 5.28267 19 5C19 4.71667 18.904 4.479 18.712 4.287C18.52 4.095 18.2827 3.99933 18 4C17.7167 4 17.479 4.096 17.287 4.288C17.095 4.48 16.9993 4.71733 17 5C17 5.28333 17.096 5.521 17.288 5.713C17.48 5.905 17.7173 6.00067 18 6ZM6 13C6.28333 13 6.521 12.904 6.713 12.712C6.905 12.52 7.00067 12.2827 7 12C7 11.7167 6.904 11.479 6.712 11.287C6.52 11.095 6.28267 10.9993 6 11C5.71667 11 5.479 11.096 5.287 11.288C5.095 11.48 4.99933 11.7173 5 12C5 12.2833 5.096 12.521 5.288 12.713C5.48 12.905 5.71733 13.0007 6 13ZM18 20C18.2833 20 18.521 19.904 18.713 19.712C18.905 19.52 19.0007 19.2827 19 19C19 18.7167 18.904 18.479 18.712 18.287C18.52 18.095 18.2827 17.9993 18 18C17.7167 18 17.479 18.096 17.287 18.288C17.095 18.48 16.9993 18.7173 17 19C17 19.2833 17.096 19.521 17.288 19.713C17.48 19.905 17.7173 20.0007 18 20Z" fill="white" />
                </svg>

                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_39)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.25 5.8V10.275C26.2499 10.8325 26.0635 11.374 25.7204 11.8133C25.3772 12.2527 24.8971 12.5648 24.3563 12.7L21.25 13.475V21.875C21.2498 22.8229 20.9417 23.7452 20.3721 24.5029C19.8025 25.2606 19.0022 25.8129 18.0917 26.0765C17.1811 26.3401 16.2096 26.3009 15.3233 25.9647C14.437 25.6284 13.6838 25.0135 13.1772 24.2122C12.6706 23.411 12.4379 22.467 12.5142 21.5221C12.5905 20.5772 12.9716 19.6827 13.6001 18.9731C14.2287 18.2635 15.0707 17.7773 15.9995 17.5876C16.9283 17.3979 17.8935 17.515 18.75 17.9212V8.2025C18.7501 7.36635 19.0296 6.55421 19.5442 5.89515C20.0588 5.23609 20.7788 4.7679 21.59 4.565L23.92 3.98125C24.1964 3.9121 24.485 3.90686 24.7637 3.96594C25.0425 4.02501 25.3041 4.14685 25.5287 4.32218C25.7533 4.49751 25.935 4.72172 26.06 4.97779C26.185 5.23386 26.25 5.51505 26.25 5.8ZM16.875 20C16.3777 20 15.9008 20.1975 15.5492 20.5492C15.1975 20.9008 15 21.3777 15 21.875C15 22.3723 15.1975 22.8492 15.5492 23.2008C15.9008 23.5525 16.3777 23.75 16.875 23.75C17.3723 23.75 17.8492 23.5525 18.2008 23.2008C18.5525 22.8492 18.75 22.3723 18.75 21.875C18.75 21.3777 18.5525 20.9008 18.2008 20.5492C17.8492 20.1975 17.3723 20 16.875 20ZM8.75 21.25C9.08152 21.25 9.39946 21.3817 9.63388 21.6161C9.8683 21.8505 10 22.1685 10 22.5C10 22.8315 9.8683 23.1495 9.63388 23.3839C9.39946 23.6183 9.08152 23.75 8.75 23.75H5C4.66848 23.75 4.35054 23.6183 4.11612 23.3839C3.8817 23.1495 3.75 22.8315 3.75 22.5C3.75 22.1685 3.8817 21.8505 4.11612 21.6161C4.35054 21.3817 4.66848 21.25 5 21.25H8.75ZM11.25 13.75C11.5815 13.75 11.8995 13.8817 12.1339 14.1161C12.3683 14.3505 12.5 14.6685 12.5 15C12.5 15.3315 12.3683 15.6495 12.1339 15.8839C11.8995 16.1183 11.5815 16.25 11.25 16.25H5C4.66848 16.25 4.35054 16.1183 4.11612 15.8839C3.8817 15.6495 3.75 15.3315 3.75 15C3.75 14.6685 3.8817 14.3505 4.11612 14.1161C4.35054 13.8817 4.66848 13.75 5 13.75H11.25ZM23.75 6.6L22.1975 6.98875C21.9503 7.05027 21.7279 7.18583 21.5599 7.37728C21.3919 7.56873 21.2864 7.80693 21.2575 8.06L21.25 8.2025V10.8987L23.75 10.2737V6.6ZM15 6.25C15.3186 6.25035 15.625 6.37234 15.8567 6.59106C16.0884 6.80977 16.2278 7.10869 16.2465 7.42674C16.2651 7.74479 16.1617 8.05797 15.9572 8.30229C15.7527 8.5466 15.4626 8.70362 15.1462 8.74125L15 8.75H5C4.6814 8.74964 4.37496 8.62765 4.14329 8.40894C3.91162 8.19022 3.77221 7.8913 3.75353 7.57325C3.73486 7.2552 3.83834 6.94202 4.04283 6.69771C4.24732 6.45339 4.53738 6.29638 4.85375 6.25875L5 6.25H15Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_39">
                            <rect width="30" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
    )
}

export default OtherButtons