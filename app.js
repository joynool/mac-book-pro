// getting all value and field by ID
function getValue (identity, state)
{
    const innerField = document.getElementById(identity);
    if (state == true) {
        return parseFloat(innerField.innerText);
    } else {
        return innerField;
    }
};
// button onclick function working panel
function passButtonValue (number)
{
    if (number == 8) {
        getValue('extra-memory', false).innerText = '0';
    };
    if (number == 16) {
        getValue('extra-memory', false).innerText = '180';
    };
    if (number == 256) {
        getValue('extra-storage', false).innerText = '0';
    };
    if (number == 512) {
        getValue('extra-storage', false).innerText = '100';
    };
    if (number == 1) {
        getValue('extra-storage', false).innerText = '180';
    };
    if (number == 25) {
        getValue('delivery-charge', false).innerText = '0';
    };
    if (number == 21) {
        getValue('delivery-charge', false).innerText = '20';
    };
    costCalculation();
};
// all value calculation panel
function costCalculation ()
{
    const bestPrice = getValue('best-price', true);
    const extraMemory = getValue('extra-memory', true);
    const extraStorage = getValue('extra-storage', true);
    const deliveryCharge = getValue('delivery-charge', true);
    const inTotal = bestPrice + extraMemory + extraStorage + deliveryCharge;
    getValue('total-price', false).innerText = inTotal;
    getValue('total', false).innerText = inTotal;
};
// promo code match & price deduction panel
document.getElementById('promo-apply').addEventListener('click', function ()
{
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku') {
        let totalPrice = getValue('total-price', true);
        totalPrice = totalPrice - ((20 / 100) * totalPrice);
        getValue('total-price', false).innerText = totalPrice;
        getValue('total', false).innerText = totalPrice;
        promoCode.value = '';
    }
})