
const validateUser = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    const errors = [];

    // Validation Logic: Check existence and type
    if (!firstName || typeof firstName !== 'string' || firstName.trim() === '') {
        errors.push('firstName is required and must be a non-empty string.');
    }

    if (!lastName || typeof lastName !== 'string' || lastName.trim() === '') {
        errors.push('lastName is required and must be a non-empty string.');
    }

    if (!hobby || typeof hobby !== 'string' || hobby.trim() === '') {
        errors.push('hobby is required and must be a non-empty string.');
    }

    // Fail-Fast Strategy
    if (errors.length > 0) {
        return res.status(400).json({
            error: 'Validation Failed',
            messages: errors
        });
    }

    // Sanitization: Trim whitespace before passing to controller
    req.body.firstName = firstName.trim();
    req.body.lastName = lastName.trim();
    req.body.hobby = hobby.trim();

    next();
};

module.exports = validateUser;