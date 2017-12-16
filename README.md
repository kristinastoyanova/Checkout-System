# Checkout System

## Description

A checkout system that scan items and calculate total amount and discounts.

Discount rules:
-----------------

- 3 for 2 deal on Apple TVs. For example, if someone buys 3 Apple TVs, he or she will pay the price of 2 only
- Super iPad will have a bulk discount applied, where the price will drop to $499.99 each, if someone buys more than 4
- VGA adapter free of charge with every MacBook Pro sold

Products catalogue:
-----------------

| SKU     | Name        | Price    |
| --------|:-----------:| --------:|
| ipd     | Super iPad  | $549.99  |
| mbp     | MacBook Pro | $1399.99 |
| atv     | Apple TV    | $109.50  |
| vga     | VGA adapter | $30.00   |

Example scenarios
-----------------

SKUs Scanned: atv, atv, atv, vga
Total expected: $249.00

SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd
Total expected: $2718.95

SKUs Scanned: mbp, vga, ipd
Total expected: $1949.98
