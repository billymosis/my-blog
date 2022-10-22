(princ "\nSCRIPT MILIK BILLY MOSIS PRIAMBODO, DILARANG MEMPERJUALBELIKAN SCRIPT INI.\n")
(princ "\nCommand G1 dan G2, referensi bisa lihat channel youtube saya.\n")
(princ "\nScript hanya LEGAL Untuk PELAJAR, untuk PROYEK TIDAK.\n")
(princ "MOHON MEMBELI LISENSI UNTUK MEMPERGUNAKAN SCRIPT INI SECARA LEGAL\nDENGAN GOPAY KE: 085649601601 SEHARGA ROKOK SURYA\n")
(vl-load-com)

(defun LM:lst->str ( lst del / str )
    (setq str (car lst))
    (foreach itm (cdr lst) (setq str (strcat str del itm)))
    str
)

(defun pline_points (e / i r)
  (repeat
    (1+ (setq i (fix (vlax-curve-getendparam e))))
     (setq r (cons (vlax-curve-getpointatparam e i) r)
           i (1- i)
     )
  )
  r
)

(defun C:G1 ( / s lst)
(if 
    (setq s (ssget 
              '((0 . "*TEXT"))
            )
    )

    (progn 
	(setq i 0)
      (repeat (sslength s) 
        (setq src (ssname s i))
        (setq val (cdr (assoc 1 (entget src))))
		(setq lst (cons val lst))
		(setq i (1+ i))
      )
	  (setq res (LM:lst->str lst "\n"))
	  (princ res)
		(vlax-invoke
			(vlax-get (vlax-get (vlax-create-object "htmlfile") 'ParentWindow) 'ClipBoardData)
			'setData
			"TEXT"
			res
		)
    )
  )
  (princ)
)

(defun C:G2 ( / pl lst resultList resultString )
(if 
    (setq pl (ssget ":s"
              '((0 . "*POLYLINE") (-4 . "<NOT") (-4 . "&") (70 . 118) (-4 . "NOT>"))
            )
    )

    (progn 
		(setq elevation (getreal "\nEnter first point elevation: "))
		(foreach p (pline_points (ssname pl 0)) 
			(progn 
				(setq X (car p))
				(setq Y (cadr p))
				(setq lst (cons (list X Y) lst))
			)
		)
		(setq lst (reverse lst))
		(setq pengurangY ( - (cadr (car lst)) elevation))
		(setq pengurangX (car (car lst)))
		(foreach coord (cdr lst) 
			(progn
				(setq valY ( - (cadr coord) pengurangY))
				(setq valX ( - (car coord) pengurangX))
				(setq resultList (cons (list valX valY ) resultList))
			) 
		)
		(setq resultList (reverse resultList))
		(setq resultList (append (list (list 0 elevation)) resultList ))
		(foreach coord resultList
			(progn
				(setq str (list (rtos (car coord) 2 3) (rtos (cadr coord) 2 3)  ))
				(setq resultString (cons (LM:lst->str str "\t") resultString))
			)
		)
		(setq resultString (reverse resultString))
		(setq res (LM:lst->str resultString "\n") )
		(vlax-invoke
			(vlax-get (vlax-get (vlax-create-object "htmlfile") 'ParentWindow) 'ClipBoardData)
			'setData
			"TEXT"
			res
		)
		(princ "\n")
		(princ res)
    )
  )
  (princ)
)