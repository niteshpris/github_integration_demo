class ResponseHandler {
  static success(res, data, message = 'Success') {
    res.status(200).json({ message, data });
  }

  static created(res, data, message = 'Resource created successfully') {
    res.status(201).json({ message, data });
  }

  static error(res, error, message = 'An error occurred') {
    console.error(message, error);
    res.status(500).json({ message, error });
  }

  static badRequest(res, message = 'Bad request') {
    res.status(400).json({ message });
  }

  static notFound(res, message = 'Resource not found') {
    res.status(404).json({ message });
  }
}