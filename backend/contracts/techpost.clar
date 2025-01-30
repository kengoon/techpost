;; Blockpost
;; contract that writes tech post on a blockchain for a small fee

(define-constant contract-owner (as-contract tx-sender)) ;; here tx-sender = contract principal

(define-constant post-price u1000000) ;; 1,000,000 = 1STX

(define-data-var total-posts uint u0)

(define-map tech-posts principal (string-utf8 500))

(define-read-only (get-total-post)
    (var-get total-posts)
)

(define-read-only (get-post (user principal))
    (map-get? tech-posts user)
)

(define-public (write-post (post (string-utf8 500)))
    (begin
        ;; #[allow(unchecked_data)]
        (map-set tech-posts tx-sender post)
        (var-set total-posts (+ (get-total-post) u1))
        (ok (try! (stx-transfer? post-price tx-sender contract-owner)))
    )
)
