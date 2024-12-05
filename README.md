# MongoDB $inc Operator Type Error

This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation. The `$inc` operator is designed to increment numeric fields.  Attempting to increment a field with a non-numeric value will result in an error.

## Bug
The provided code attempts to increment both `field1` (numeric) and `field2` (string) using `$inc`. This will cause an error because `$inc` only works with numbers.

## Solution
The solution involves correctly using the `$inc` operator only on numeric fields. For non-numeric fields, use the `$set` operator for updates.
