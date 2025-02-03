"use strict";
function getStatusMessage(status) {
    switch (status) {
        case 0 /* Status.Active */:
            return "The status is active.";
        case 1 /* Status.Inactive */:
            return "The status is inactive.";
        case 2 /* Status.Pending */:
            return "The status is pending.";
        default:
            return "Unknown status.";
    }
}
// Example usage
let currentStatus = 0 /* Status.Active */;
console.log(getStatusMessage(currentStatus)); // Output: The status is active.
